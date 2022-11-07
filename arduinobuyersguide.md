<<<<<<< HEAD:arduinobuyersguide.md
# Arduino Buyers Guide  | [HOME](README.md) |


### This is a guide on all the different Arduino's

### The Arduino Uno is the most common Arduino because it has a normal amount of IO. Also, there is no need to solder

### The Leonardo has the same form-factor as the Uno but can be used as a hid device, like a gamepad or "button-box" and such

### The Mega 2560 is extremely common. It has over three times IO then the UNO. If you need a lot of LEDs, or pins to use, the MEGA is a good choice for this

### The Micro is good to use on a breadboard. Also compact this has the same chip as the Leonardo

### The Due also has a lot of IO, has more memory than the Mega 2560 whitch also makes it a great starter board

### The nano has the same chip as the Uno so can be used in a final product. Many times it's easiest to prototype on a UNO, then when all the debugging is done, use the NANO for the final product

### The Zero uses 3.3v insted of the normal 5v. Also is a 32-bit board so it cam proces alot faster. 
---

# Below is a chart of the more common arduino boards

| NAME                        | Uno Rev3   | Uno WiFi Rev2 | Mega 2560 Rev3 | Leonardo   | Due         | Micro      | Zero             | Arduino UNO Mini LE |
| --------------------------- | ---------- | ------------- | -------------- | ---------- | ----------- | ---------- | ---------------- | ------------------- |
| MICROCONTROLLER             | ATmega328P | ATmega4809    | ATmega2560     | ATmega32u4 | AT91SAM3X8E | ATmega32U4 | ATSAMD21G18      | ATmega328P          |
| USB CONNECTOR               | USB-B      | USB-B         | USB-B          | MINI-USB-A | MINI-USB-A  | MINI-USB-A | USB-C            | USB-C               |
| OPERATING VOLTAGE           | 5V         | 5V            | 5V             | 5V         | 3.3V        | 5V         | 3.3V             | 5V                  |
| INPUT VOLTAGE (RECOMMENDED) | 7-12V      | 6 - 20V       | 7-12V          | 7-12V      | 7-12V       | 7-12V      |                  | 6-12V               |
| INPUT VOLTAGE (LIMIT)       | 6-20V      |               | 6-20V          | 6-20V      | 6-16V       |            |                  |                     |
| DIGITAL I/O PINS            | 14         | 14            | 54             | 20         | 54          | 20         | 20               | 14                  |
| PWM DIGITAL I/O PINS        | 6          | 5             | 14             | 7          |             | 7          | 10               | 6                   |
| ANALOG INPUT PINS           | 6          | 6             | 16             | 12         | 12          | 12         | 6, 12-bit        | 6                   |
| ANALOG OUTPUT PINS          | None       | None          | None           | None       | 2 (DAC)     | None       | 1, 10-bit DAC    | None                |
| DC CURRENT PER I/O PIN      | 20 mA      | 20 mA         | 20 mA          | 40 mA      | 130 mA      | 20 mA      | 7 mA             | 20 mA               |
| DC CURRENT FOR 3.3V PIN     | 50 mA      | 50 mA         | 50 mA          | 50 mA      | 800 mA      | 50 mA      |                  | 50 mA               |
| DC CURRENT FOR 5V PIN       | None       | None          | None           | None       | 800 mA      |            |                  |                     |
| FLASH MEMORY                | 32 KB      | 48 KB         | 256 KB         | 32 KB      | 512 KB      | 32 KB      | 256 KB           |                     |
| SRAM                        | 2 KB       | 6,144 Bytes   | 8 KB           | 2.5 KB     | 96 KB       | 2.5 KB     | 32 KB            |                     |
| EEPROM                      | 1 KB       | 256 Bytes     | 4 KB           | 1 KB       |             | 1 KB       |                  |                     |
| CLOCK SPEED                 | 16 MHz     | 16 MHz        | 16 MHz         | 16 MHz     | 84 MHz      | 16 MHz     | 48 MHz           |                     |
| LED\_BUILTIN(pin)           | 13         | 25            | 13             | 13         |             | 13         | 13               | 13                  |
| LENGTH                      | 68.6 mm    | 68.6 mm       | 101.52 mm      | 68.6 mm    | 101.52 mm   | 48 mm      | 68 mm            | 34.20 mm            |
| WIDTH                       | 53.4 mm    | 53.4 mm       | 53.3 mm        | 53.3 mm    | 53.3 mm     | 18 mm      | 53 mm            | 8.05 g              |
| WEIGHT                      | 25 g       | 25 g          | 37 g           | 20 g       | 36 g        | 13 g       | 12 gr.           | 26.70 mm            |
| UART                        |            |               |                |            |             |            | 2                | yes                 |
| EXTERNAL INTERRUPTS         |            |               |                |            |             |            | All except pin 4 |                     |
| EXTRA NOTES                 |       | [fn1](#foot-note-1)|                |            |             |            |                  | [fn2](#foot-note-2) |


## FOOT NOTES

### foot note 1

RADIO MODULE	u-blox NINA-W102

SECURE ELEMENT	ATECC608A

INERTIAL MEASUREMENT UNIT	LSM6DS3TR

### foot note 2


I2C	yes 

SPI	yes 

BATTERY CONNECTOR	None. 

MAIN PROCESSOR	ATmega328P 16 MHz 

USB-SERIAL PROCESSOR	ATmega16U2 16 MHz 

MEMORY ATMEGA328P	2KB SRAM, 32KB FLASH, 1KB EEPROM 