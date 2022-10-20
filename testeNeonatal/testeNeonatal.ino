#include <Adafruit_Fingerprint.h>

#if (defined(__AVR__) || defined(ESP8266)) && !defined(__AVR_ATmega2560__)
SoftwareSerial mySerial(14, 12);
#else
#define mySerial Serial1
#endif

Adafruit_Fingerprint finger = Adafruit_Fingerprint(&mySerial);
uint8_t id;
void setup()
{
  pinMode(16, INPUT);
  pinMode(5, INPUT);
  digitalWrite(5,HIGH);
  Serial.begin(9600);
  while (!Serial);
  delay(100);
  Serial.println("\n\nAdafruit finger detect test");

  finger.begin(57600);
  delay(5);
  if (finger.verifyPassword()) {
    Serial.println("Sensor iniciado com sucesso!");
  } else {
    Serial.println("Falha na inicializacao do sensor Biometrico");
    while (1) { delay(1); }
  }

  Serial.println(F("Lendo parametros do sensor Biometrico"));
  finger.getParameters();
  Serial.print(F("Status: 0x")); 
  Serial.println(finger.status_reg, HEX);
  Serial.print(F("Sys ID: 0x")); 
  Serial.println(finger.system_id, HEX);
  Serial.print(F("Capacity: ")); 
  Serial.println(finger.capacity);
  Serial.print(F("Security level: ")); 
  Serial.println(finger.security_level);
  Serial.print(F("Device address: ")); 
  Serial.println(finger.device_addr, HEX);
  Serial.print(F("Packet len: ")); 
  Serial.println(finger.packet_len);
  Serial.print(F("Baud rate: ")); 
  Serial.println(finger.baud_rate);

  finger.getTemplateCount();

  if (finger.templateCount == 0) {
    Serial.print("Nenhum registro encontrado. Registre os dados primeiro.");
  }
  else {
    Serial.println("Aguardando leitura...");
      Serial.print("O contem "); 
      Serial.print(finger.templateCount); 
      Serial.println(" registros");
  }
}
uint8_t readnumber(void) {
  uint8_t num = 0;

  while (num == 0) {
    while (! Serial.available());
    num = Serial.parseInt();
  }
  return num;
}
void loop()
{
  if (digitalRead(16) == LOW) {
  getFingerprintID();
  delay(50);}
  if (digitalRead(5) == LOW) {
  getFingerprintEnroll();
  delay(50);}
}

uint8_t getFingerprintID() {
  uint8_t p = finger.getImage();
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("impressao capturada");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.println("Nenhum dedo dectado");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicacao");
      return p;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Impressao com erro");
      return p;
    default:
      Serial.println("Erro desconhecido");
      return p;
  }
  p = finger.image2Tz();
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Impressao convertida com sucesso");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Impressao confusa");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro na comunicacao");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Impressao nao obtida completamente");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Impressao nao obtida completamente");
      return p;
    default:
      Serial.println("Erro desconhecido");
      return p;
  }

  p = finger.fingerSearch();
  if (p == FINGERPRINT_OK) {
    Serial.println("Impressao encontrada!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Erro de comunicacao");
    return p;
  } else if (p == FINGERPRINT_NOTFOUND) {
    Serial.println("Impressao nao encontrada");
    return p;
  } else {
    Serial.println("Erro desconhecido");
    return p;
  }

  Serial.print("ID da impressao: #"); 
  Serial.print(finger.fingerID);
  Serial.print(" Com grau de confianca de "); 
  Serial.println(finger.confidence);

  return finger.fingerID;
}

uint8_t getFingerprintEnroll() {

  int p = -1;
  Serial.print("Aguardando um dedo para registrar como #"); 
  Serial.println(id);
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Impressao capturada");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.println(".");
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("erro de comunicacao");
      break;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("falha na impressao digital");
      break;
    default:
      Serial.println("Erro nao documentado");
      break;
    }
  }

  p = finger.image2Tz(1);
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Impressao convertida com sucesso");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Impressao confusa");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro na comunicacao");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Impressao nao obtida completamente");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Impressao nao obtida completamente");
      return p;
    default:
      Serial.println("Erro desconhecido");
      return p;
      }

  Serial.println("Retire o dedo");
  delay(2000);
  p = 0;
  while (p != FINGERPRINT_NOFINGER) {
    p = finger.getImage();
  }
  Serial.print("ID "); 
  Serial.println(id);
  p = -1;
  Serial.println("Coloque o mesmo dedo novamente");
  while (p != FINGERPRINT_OK) {
    p = finger.getImage();
    switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Impressao capturada");
      break;
    case FINGERPRINT_NOFINGER:
      Serial.print(".");
      break;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro de comunicacao");
      break;
    case FINGERPRINT_IMAGEFAIL:
      Serial.println("Falha impressao digital");
      break;
    default:
      Serial.println("Erro desconhecido");
      break;
    }
  }

  p = finger.image2Tz(2);
  switch (p) {
    case FINGERPRINT_OK:
      Serial.println("Impressao convertida com sucesso");
      break;
    case FINGERPRINT_IMAGEMESS:
      Serial.println("Impressao confusa");
      return p;
    case FINGERPRINT_PACKETRECIEVEERR:
      Serial.println("Erro na comunicacao");
      return p;
    case FINGERPRINT_FEATUREFAIL:
      Serial.println("Impressao nao obtida completamente");
      return p;
    case FINGERPRINT_INVALIDIMAGE:
      Serial.println("Impressao nao obtida completamente");
      return p;
    default:
      Serial.println("Erro desconhecido");
      return p;
  }

  Serial.print("Criando modelo para #");  
  Serial.println(id);

  p = finger.createModel();
  if (p == FINGERPRINT_OK) {
    Serial.println("Impressao validada!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Erro de comunicacao");
    return p;
  } else if (p == FINGERPRINT_ENROLLMISMATCH) {
    Serial.println("impressao digital nao valida");
    return p;
  } else {
    Serial.println("erro nao documentado");
    return p;
  }

  Serial.print("ID "); 
  Serial.println(id);
  p = finger.storeModel(id);
  if (p == FINGERPRINT_OK) {
    Serial.println("Armazenado!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Erro de comunicacao");
    return p;
  } else if (p == FINGERPRINT_BADLOCATION) {
    Serial.println("Falha no banco de dados");
    return p;
  } else if (p == FINGERPRINT_FLASHERR) {
    Serial.println("Erro ao armazenar");
    return p;
  } else {
    Serial.println("Erro desconhecido");
    return p;
  }
  return true;
}

uint8_t deleteFingerprint(uint8_t id) {
  uint8_t p = -1;
  p = finger.deleteModel(id);

  if (p == FINGERPRINT_OK) {
    Serial.println("Deleted!");
  } else if (p == FINGERPRINT_PACKETRECIEVEERR) {
    Serial.println("Communication error");
  } else if (p == FINGERPRINT_BADLOCATION) {
    Serial.println("Could not delete in that location");
  } else if (p == FINGERPRINT_FLASHERR) {
    Serial.println("Error writing to flash");
  } else {
    Serial.print("Unknown error: 0x"); 
    Serial.println(p, HEX);
  }
  return p;
}
