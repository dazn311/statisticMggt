0:100  0:100  MemLog inited, TSC freq: 2592364880
0:100  0:000  CPU was calibrated with RTC
0:100  0:000  
0:100  0:000  Now is 25.02.2021,  04:57:49 (GMT)
0:100  0:000  Starting Clover revision: 5103 (master, commit 3f3b85da0) on American Megatrends EFI
0:100  0:000  Build with: [Args: -D NO_GRUB_DRIVERS_EMBEDDED -t GCC53 | -D NO_GRUB_DRIVERS_EMBEDDED --conf=/Users/sergey/src/CloverHackyColor/Conf -D USE_LOW_EBDA -a X64 -b RELEASE -t GCC53 -n 5 | OS: 10.14.6]
0:100  0:000  SelfDevicePath=PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(4,GPT,9F91BE11-35B2-4E18-8611-F3E593F3F03A,0xDEA7000,0xEE07000) @75114198
0:100  0:000  SelfDirPath = \EFI\CLOVER
0:100  0:000  SimpleTextEx Status=Success
0:100  0:000  === [ Get Smbios ] ========================================
0:106  0:005  Type 16 Index = 0
0:106  0:000  Total Memory Slots Count = 2
0:106  0:000  Type 17 Index = 0
0:106  0:000  SmbiosTable.Type17->Speed = 2667MHz
0:106  0:000  SmbiosTable.Type17->Size = 8192MB
0:106  0:000  SmbiosTable.Type17->Bank/Device = BANK 0 ChannelA-DIMM0
0:106  0:000  SmbiosTable.Type17->Vendor = SK Hynix
0:106  0:000  SmbiosTable.Type17->SerialNumber = 204FC372
0:106  0:000  SmbiosTable.Type17->PartNumber = HMA81GS6DJR8N-VK    
0:106  0:000  Type 17 Index = 1
0:106  0:000  SmbiosTable.Type17->Speed = 2667MHz
0:106  0:000  SmbiosTable.Type17->Size = 8192MB
0:106  0:000  SmbiosTable.Type17->Bank/Device = BANK 2 ChannelB-DIMM0
0:106  0:000  SmbiosTable.Type17->Vendor = Kingston
0:106  0:000  SmbiosTable.Type17->SerialNumber = 915E8E1F
0:106  0:000  SmbiosTable.Type17->PartNumber = 99U5700-011.A00G    
0:106  0:000  Boot status=0
0:106  0:000  Running on: 'GF63 Thin 9RCX' with board 'MS-16R3'
0:106  0:000  === [ GetCPUProperties ] ==================================
0:106  0:000  CPU Vendor = 756E6547 Model=906EA
0:106  0:000   The CPU supported SSE4.1
0:106  0:000  BrandString = Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
0:106  0:000   The CPU supported turbo
0:106  0:000  MSR 0x35               6000C
0:106  0:000   TSC/CCC Information Leaf:
0:106  0:000    numerator     : 216
0:106  0:000    denominator   : 2
0:106  0:000   Calibrated ARTFrequency: 24003378
0:106  0:000   Rounded ARTFrequency: 24000000
0:106  0:000  MSR 0xE2 before patch 1E008005
0:106  0:000  MSR 0xE2 is locked, PM patches will be turned on
0:106  0:000  MSR 0xCE              0008083B_F1011A00
0:106  0:000  corrected FLEX_RATIO = 0
0:106  0:000  MSR 0x1B0             00000000
0:106  0:000  FSBFrequency = 96 MHz, DMI FSBFrequency = 100 MHz, Corrected FSBFrequency = 100 MHz
0:106  0:000  MaxDiv/MinDiv: 26.0/8
0:106  0:000  Turbo: 42/43/44/45
0:106  0:000  Features: 0xBFEBFBFF
0:106  0:000  Threads: 12
0:106  0:000  Cores: 6
0:106  0:000  FSB: 100 MHz
0:106  0:000  CPU: 2475 MHz
0:106  0:000  TSC: 2475 MHz
0:106  0:000  PIS: 100 MHz
0:106  0:000  ExternalClock: 25 MHz
0:106  0:000  === [ GetDevices ] ========================================
0:106  0:000  GOP found at: PciRoot(0x0)/Pci(0x2,0x0)/AcpiAdr(0x80011400)
0:106  0:000  PCI (00|00:00.00) : 8086 3EC4 class=060000
0:106  0:000  PCI (00|00:01.00) : 8086 1901 class=060400
0:106  0:000  PCI (00|01:00.00) : 10DE 1C8F class=030200
0:106  0:000  PCI (00|00:02.00) : 8086 3E9B class=030000
0:106  0:000   - GOP: Provided by device
0:106  0:000   - GFX: Model=Intel UHD Graphics 630 (Intel)
0:106  0:000  PCI (00|00:12.00) : 8086 A379 class=118000
0:106  0:000  PCI (00|00:14.00) : 8086 A36D class=0C0330
0:106  0:000  PCI (00|00:14.02) : 8086 A36F class=050000
0:106  0:000  PCI (00|00:14.03) : 8086 A370 class=028000
0:106  0:000   - WIFI: Vendor=Intel
0:106  0:000  PCI (00|00:15.00) : 8086 A368 class=0C8000
0:106  0:000  PCI (00|00:15.02) : 8086 A36A class=0C8000
0:106  0:000  PCI (00|00:16.00) : 8086 A360 class=078000
0:106  0:000  PCI (00|00:17.00) : 8086 A353 class=010601
0:106  0:000  PCI (00|00:1D.00) : 8086 A330 class=060400
0:107  0:000  PCI (00|02:00.00) : 1179 0113 class=010802
0:107  0:000  PCI (00|00:1D.04) : 8086 A334 class=060400
0:107  0:000  PCI (00|03:00.00) : 10EC 8168 class=020000
0:107  0:000   - LAN: 0 Vendor=Realtek
0:107  0:000  PCI (00|00:1F.00) : 8086 A30D class=060100
0:107  0:000  PCI (00|00:1F.03) : 8086 A348 class=040300
0:107  0:000  PCI (00|00:1F.04) : 8086 A323 class=0C0500
0:107  0:000  PCI (00|00:1F.05) : 8086 A324 class=0C8000
0:107  0:000  === [ GetDefaultSettings ] ================================
0:107  0:000  Clover load options size = 0 bytes
0:108  0:000  CheckOEMPathExists tried EFI\CLOVER\OEM\GF63 Thin 9RCX--00-00-00-00-00-00. Dir not exists
0:108  0:000  CheckOEMPathExists tried EFI\CLOVER\OEM\MS-16R3\UEFI. Dir not exists
0:108  0:000  CheckOEMPathExists tried EFI\CLOVER\OEM\GF63 Thin 9RCX. Dir not exists
0:108  0:000  CheckOEMPathExists tried EFI\CLOVER\OEM\GF63 Thin 9RCX-2475. Dir not exists
0:108  0:000  CheckOEMPathExists tried EFI\CLOVER\OEM\MS-16R3. Dir not exists
0:108  0:000  CheckOEMPathExists tried EFI\CLOVER\OEM\MS-16R3-2475. Dir not exists
0:108  0:000  set OEMPath by default: EFI\CLOVER
0:112  0:004  EFI\CLOVER\config.plist loaded: Success
0:118  0:005  === [ GetListOfThemes ] ===================================
0:119  0:001  - [00]: embedded
0:121  0:001  - [00]: Glassy
0:124  0:002  - [01]: random
0:125  0:001  - [01]: tonymacx86
0:128  0:003  === [ Found config plists ] ===============================
0:129  0:000  - config-15.2.plist
0:130  0:000  - config.plist
0:131  0:000  - config0.plist
0:131  0:000  === [ GetEarlyUserSettings ] ==============================
0:131  0:000  timeout set to 10
0:131  0:000  Custom boot CUSTOM_BOOT_DISABLED (0x0)
0:131  0:000  KextsToPatch: 8 requested
0:131  0:000   - [00]: AppleIntelLpssI2C (Prevent Apple I2C kexts from attaching to I2C controllers, credit CoolStar) :: PlistPatch :: data len: 5
0:131  0:000   - [01]: AppleIntelLpssI2CController (Prevent Apple I2C kexts from attaching to I2C controllers, credit CoolStar) :: PlistPatch :: data len: 5
0:131  0:000   - [02]: com.apple.iokit.IOUSBHostFamily (USB port limit patch #1 10.14.x modify by DalianSky(credit ydeng)) :: MatchOS: 10.14.x :: BinPatch :: data len: 4
0:131  0:000   - [03]: com.apple.iokit.IOUSBHostFamily (USB port limit patch #2 10.14.x modify by DalianSky(credit PMHeart)) :: MatchOS: 10.14.x :: BinPatch :: data len: 4
0:131  0:000   - [04]: com.apple.driver.usb.AppleUSBXHCI (USB Port limit patch #3 10.14.x modify by DalianSky(credits PMheart)) :: MatchOS: 10.14.x :: BinPatch :: data len: 4
0:131  0:000   - [05]: com.apple.driver.usb.AppleUSBXHCI (USB Port limit patch #4 10.14.x modify by DalianSky(credits PMheart)) :: MatchOS: 10.14.x :: BinPatch :: data len: 4
0:131  0:000   - [06]: com.apple.iokit.IOUSBHostFamily (USB Port limit patch #1(credits PMheart)) :: MatchOS: 10.15.x :: BinPatch :: data len: 4
0:131  0:000   - [07]: com.apple.driver.usb.AppleUSBXHCI (USB Port limit patch #2(credits PMheart)) :: MatchOS: 10.15.x :: BinPatch :: data len: 4
0:131  0:000  KernelToPatch: 3 requested
0:131  0:000   - [00]: MSR 0xE2 _xcpm_idle instant reboot(c) Pike R. Alpha :: data len: 8
0:131  0:000   - [01]: Disable panic kext logging on 10.13 release kernel (credit vit9696) :: MatchOS: 10.13.x :: data len: 6
0:131  0:000   - [02]: Disable panic kext logging on 10.14 release kernel (credit vit9696) :: MatchOS: 10.14.x :: data len: 6
0:131  0:000  Default theme: Beauty
0:131  0:000  Hiding entries with string Preboot
0:131  0:000  === [ LoadDrivers ] =======================================
0:134  0:002  Loading ApfsDriverLoader.efi  status=Success
0:137  0:003   - driver needs connecting
0:137  0:000  Loading AptioMemoryFix.efi  status=Success
0:142  0:004  Loading AudioDxe.efi  status=Success
0:146  0:004   - driver needs connecting
0:146  0:000  Loading DataHubDxe.efi  status=Success
0:151  0:004  Loading FSInject.efi  status=Success
0:154  0:003  Loading PartitionDxe.efi  status=Success
0:159  0:004   - driver needs connecting
0:159  0:000  Loading SMCHelper.efi  status=Success
0:163  0:003  3 drivers needs connecting ...
0:163  0:000  PlatformDriverOverrideProtocol not found. Installing ... Success
0:163  0:000  Partition driver loaded: 
0:163  0:000  APFS driver loaded
0:163  0:000  Searching for invalid DiskIo BY_DRIVER connects: not found, all ok
4:391  4:227  === [ InitScreen ] ========================================
4:391  0:000  Console modes reported: 4, available modes:
4:391  0:000   - [01]: 80x25 (current mode)
4:391  0:000   - [02]: 80x25
4:391  0:000   - [03]: 100x31
4:391  0:000   - [04]: 240x56
4:391  0:000  SetMaxResolution: found best mode 0: 1920x1080
4:391  0:000   - already set
4:391  0:000  reinit: self device path=PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(4,GPT,9F91BE11-35B2-4E18-8611-F3E593F3F03A,0xDEA7000,0xEE07000)
4:396  0:005  Using embedded font: Success
4:398  0:001  === [ GetMacAddress ] =====================================
4:398  0:000  MAC address of LAN #0= 00:D8:61:E1:C9:8C:
4:398  0:000  MAC address of LAN #1= 00:D8:61:E1:C9:8C:
4:398  0:000  MAC address of LAN #2= 00:D8:61:E1:C9:8C:
4:398  0:000  MAC address of LAN #3= 00:D8:61:E1:C9:8C:
4:398  0:000  === [ ScanSPD ] ===========================================
4:398  0:000  Scanning SMBus [8086:A323], mmio: 0xA441C004, ioport: 0xEFA0, hostc: 0x11
4:418  0:020  Slot: 0 Type 26 8192MB 2666MHz Vendor=SK Hynix PartNo=HMA81GS6DJR8N-VK SerialNo=0200040F0C030702
4:439  0:020  Slot: 2 Type 26 8192MB 2666MHz Vendor=Kingston PartNo=99U5700-011.A00G SerialNo=0901050E080E010F
4:441  0:001  === [ GetAcpiTablesList ] =================================
4:449  0:008  Get Acpi Tables List from RSDT:
4:449  0:000   - [00]: FACP  MEGABOOK len=132
4:449  0:000   - [01]: APIC  MEGABOOK len=244
4:449  0:000   - [02]: FPDT  MEGABOOK len=68
4:449  0:000   - [03]: FIDT  MEGABOOK len=156
4:449  0:000   - [04]: ECDT  MEGABOOK len=193
4:449  0:000   - [05]: MCFG  MEGABOOK len=60
4:449  0:000   - [06]: SSDT  CpuSsdt len=6940
4:449  0:000   - [07]: SLIC  MEGABOOK len=374
4:449  0:000   - [08]: SSDT  SaSsdt  len=12742
4:449  0:000   - [09]: SSDT  PegSsdt len=9639
4:449  0:000   - [10]: HPET  MEGABOOK len=56
4:449  0:000   - [11]: SSDT  xh_cfhd4 len=2431
4:449  0:000   - [12]: UEFI  MEGABOOK len=66
4:449  0:000   - [13]: LPIT  MEGABOOK len=148
4:449  0:000   - [14]: DBGP  MEGABOOK len=52
4:449  0:000   - [15]: DBG2  MEGABOOK len=84
4:449  0:000   - [16]: SSDT  ADebTabl len=324
4:449  0:000   - [17]: SSDT  SgPeg len=174
4:449  0:000   - [18]: BGRT  MEGABOOK len=56
4:449  0:000   - [19]: TPM2  MEGABOOK len=52
4:449  0:000   - [20]: SSDT  OptTabl len=6733
4:449  0:000   - [21]: WSMT  MEGABOOK len=40
4:449  0:000  Calibrated TSC Frequency = 2592364880 = 2592MHz
4:450  0:000  === [ GetUserSettings ] ===================================
4:450  0:000  Add 2 devices:
4:450  0:000  USB FixOwnership: yes
4:450  0:000  Dropping 2 tables:
4:450  0:000   - [00]: Drop table  signature="DMAR" (52414D44)
4:450  0:000           - set table: 52414D44,                0 to drop: no
4:450  0:000   - [01]: Drop table  signature="#MCF" (46434D23)
4:450  0:000           - set table: 46434D23,                0 to drop: no
4:450  0:000   - final DSDT Fix mask=08068050
4:450  0:000  PatchesDSDT: 10 requested
4:450  0:000   - [00]: (change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [01]: (change HDAS to HDEF, optionally pair with SSDT-HDEF.aml) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [02]: (change HECI to IMEI, optionally pair with SSDT-IMEI.aml) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [03]: (change _DSM to XDSM) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [04]: (change _OSI to XOSI, pair with SSDT-XOSI.aml) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [05]: (change AZAL to HDEF, optionally pair with SSDT-HDEF.aml) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [06]: (change SAT0 to SATA, optionally pair with SSDT-SATA.aml) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [07]: (change MEI to IMEI, optionally pair with SSDT-IMEI.aml) lenToFind: 4, lenToReplace: 4, Target Bridge: <null string>
4:450  0:000   - [08]: (change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml) lenToFind: 5, lenToReplace: 5, Target Bridge: <null string>
4:450  0:000   - [09]: (fix RTC _STA bug) lenToFind: 8, lenToReplace: 8, Target Bridge: <null string>
4:450  0:000  Using ProductName from config: MacBookPro15,2
4:450  0:000  Using latest BiosVersion from clover
4:450  0:000  BiosVersion: MBP152.88Z.F000.B00.1912090107
4:450  0:000  BiosReleaseDate: 12/09/2019
4:450  0:000  Using EfiVersion from clover: 1037.80.21.0.0
4:450  0:000  Using FirmwareFeatures from config: 0xFC0FE137
4:450  0:000  Using FirmwareFeaturesMask from config: 0xFF1FFF3F
4:450  0:000  Board-ID set from config as Mac-1E7E29AD0135F9BC
4:450  0:000  BoardType: 0xA
4:450  0:000  ChassisType: 0x9
4:450  0:000  Converted CustomUUID BDAAD90F-95A7-4B8A-896C-504489B9F8EA
4:452  0:001  === [ Found DSDT tables ] =================================
5:791  1:339  === [ ScanVolumes ] =======================================
5:791  0:000  Found 18 volumes with blockIO
5:791  0:000  - [00]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)
5:792  0:000  - [01]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(1,GPT,2F76E5FA-82FC-456E-AF42-596ED09C6629,0x28,0x64000)
5:792  0:000          Result of bootcode detection: bootable unknown (legacy)
5:794  0:001  - [02]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)
5:795  0:000          Result of bootcode detection: bootable unknown (legacy)
5:795  0:000  - [03]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(3,GPT,C98FB38D-A099-4465-8B5C-8642760333B2,0xB297000,0x2C10000)
5:795  0:000  - [04]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(4,GPT,9F91BE11-35B2-4E18-8611-F3E593F3F03A,0xDEA7000,0xEE07000)
5:796  0:000          Result of bootcode detection: bootable Windows (vista,win)
5:799  0:002          This is SelfVolume !!
5:799  0:000  - [05]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(5,GPT,D04BB0E3-4D31-4701-209A-8FA91A01953D,0x1CCAE000,0x517000)
5:799  0:000          Result of bootcode detection: bootable Windows (vista,win)
5:800  0:000  - [06]: Volume: PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)
5:801  0:000  - [07]: Volume: PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(1,GPT,EF12072B-B54B-4E22-A43A-899165AAB987,0x800,0x108800)
5:801  0:000          Result of bootcode detection: bootable Windows (vista,win)
5:801  0:000  - [08]: Volume: PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(2,GPT,BCB4C341-A85F-AC5A-0BFE-A24CC0AC57B3,0x109000,0xD3E800)
5:801  0:000  - [09]: Volume: PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(3,GPT,7A7DB814-41BD-466B-CE70-EEC8E0B8F3A9,0xE7C000,0x194A0000)
5:801  0:000  - [10]: Volume: PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(4,GPT,2904C0ED-6A6B-3A57-F700-11D924345A25,0x1A31C000,0x64000)
5:801  0:000          Result of bootcode detection: bootable unknown (legacy)
5:802  0:000  - [11]: Volume: PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(5,GPT,F8340D53-CDB6-4CE7-92B5-B887CF0CBA95,0x1A380000,0x2573000)
5:802  0:000          Result of bootcode detection: bootable Windows (vista,win)
5:802  0:000  - [12]: Volume: PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(6,GPT,69A0758B-9DA3-410C-81B6-143977B1F310,0x1C8F3000,0x1400000)
5:803  0:000          Result of bootcode detection: bootable Windows (vista,win)
5:803  0:000  - [13]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,E90D06E5463D2143BA0288D9F93F6EA4)
5:803  0:000          hiding this volume
5:803  0:000  - [14]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,DFD6D8E6D011C73FA4EF9330A1E51ACD)
5:803  0:000  - [15]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,274804D5EEA27F46AC105EA989EE698E)
5:803  0:000  - [16]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,821501F97BE83B47B765B32FE10DEF8F)
5:803  0:000  - [17]: Volume: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,981243FB3B4F8A478D820F38963E19F4)
5:803  0:000  found 2 handles with audio
5:803  0:000  No AudioIoDevice stored
5:803  0:000  no stored audio parameters
5:803  0:000  Found Audio Device Realtek ALC269 (Speaker) at index 0
5:803  0:000  Found Audio Device Realtek ALC269 (Headphones) at index 1
5:803  0:000  Found Audio Device Intel Kaby Lake HDMI (HDMI) at index 2
5:803  0:000  === [ InitTheme ] =========================================
5:803  0:000  use night theme
5:804  0:000  GlobalConfig: Beauty not found, get embedded theme
5:804  0:000   using embedded theme
5:804  0:000  got embedded sound
5:804  0:000    Channels: 2  Sample rate: 8000 Hz  Bits: 16
5:804  0:000  output to channel 0 with volume 70, len=25600
5:804  0:000   sound channels=2 bits=16 freq=8000
5:805  0:000  sound converted to 48kHz
5:805  0:000  not found AudioIo to play
5:805  0:000  sound play end with status=Not Found
5:806  0:000  Using embedded font: Success
5:806  0:000  theme inited
5:806  0:000  Chosen embedded theme
5:806  0:000  after NVRAM boot-args=dart=0 kext-dev-mode=1 nv_disable=1 -cdfon  -igfxcflhdmi -igfxcflhdmi2 -v
5:806  0:000  === [ Dump SMC keys from NVRAM ] ==========================
5:806  0:000  found AppleSMC protocol
5:847  0:041  Registered 17 SMC keys
5:850  0:003  === [ AddCustomEntries ] ==================================
5:850  0:000  Custom entry 0 Title:"Recovery" Path:"\com.apple.recovery.boot\boot.efi" Type:10 Flags:0x6 matching all volumes
5:850  0:000      Checking volume "ESP" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(1,GPT,2F76E5FA-82FC-456E-AF42-596ED09C6629,0x28,0x64000)) ... skipped because path does not exist
5:853  0:002      Checking volume "sam10" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(4,GPT,9F91BE11-35B2-4E18-8611-F3E593F3F03A,0xDEA7000,0xEE07000)) ... skipped because path does not exist
5:853  0:000      Checking volume "SAMTMP" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(5,GPT,D04BB0E3-4D31-4701-209A-8FA91A01953D,0x1CCAE000,0x517000)) ... skipped because path does not exist
5:853  0:000      Checking volume ">AAB0=>28BL" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(1,GPT,EF12072B-B54B-4E22-A43A-899165AAB987,0x800,0x108800)) ... skipped because path does not exist
5:853  0:000      Checking volume "ESP" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(4,GPT,2904C0ED-6A6B-3A57-F700-11D924345A25,0x1A31C000,0x64000)) ... skipped because path does not exist
5:855  0:001      Checking volume "m2" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(5,GPT,F8340D53-CDB6-4CE7-92B5-B887CF0CBA95,0x1A380000,0x2573000)) ... skipped because path does not exist
5:855  0:000      Checking volume "DriverCD" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(6,GPT,69A0758B-9DA3-410C-81B6-143977B1F310,0x1C8F3000,0x1400000)) ... skipped because path does not exist
5:855  0:000      Checking volume "Preboot" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,E90D06E5463D2143BA0288D9F93F6EA4)) ... skipped because volume is hidden
5:855  0:000      Checking volume "sam10125" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,DFD6D8E6D011C73FA4EF9330A1E51ACD)) ... skipped because path does not exist
5:855  0:000      Checking volume "Recovery" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,274804D5EEA27F46AC105EA989EE698E)) ... skipped because path does not exist
5:855  0:000      Checking volume "VM" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,821501F97BE83B47B765B32FE10DEF8F)) ... skipped because path does not exist
5:855  0:000      Checking volume "sam1015" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,981243FB3B4F8A478D820F38963E19F4)) ... skipped because path does not exist
5:855  0:000  Custom entry 1 Title:"Windows" Path:"\EFI\Microsoft\Boot\bootmgfw.efi" Options:"-s -h" Type:7 Flags:0x0 matching all volumes
5:855  0:000      Checking volume "ESP" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(1,GPT,2F76E5FA-82FC-456E-AF42-596ED09C6629,0x28,0x64000)) ... match!
5:858  0:003  Custom settings: <null string>.plist will  be applied
5:859  0:000      Checking volume "sam10" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(4,GPT,9F91BE11-35B2-4E18-8611-F3E593F3F03A,0xDEA7000,0xEE07000)) ... skipped because path does not exist
5:859  0:000      Checking volume "SAMTMP" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(5,GPT,D04BB0E3-4D31-4701-209A-8FA91A01953D,0x1CCAE000,0x517000)) ... skipped because path does not exist
5:860  0:000      Checking volume ">AAB0=>28BL" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(1,GPT,EF12072B-B54B-4E22-A43A-899165AAB987,0x800,0x108800)) ... skipped because path does not exist
5:860  0:000      Checking volume "ESP" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(4,GPT,2904C0ED-6A6B-3A57-F700-11D924345A25,0x1A31C000,0x64000)) ... match!
5:861  0:000  Custom settings: <null string>.plist will  be applied
5:861  0:000      Checking volume "m2" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(5,GPT,F8340D53-CDB6-4CE7-92B5-B887CF0CBA95,0x1A380000,0x2573000)) ... skipped because path does not exist
5:861  0:000      Checking volume "DriverCD" (PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(6,GPT,69A0758B-9DA3-410C-81B6-143977B1F310,0x1C8F3000,0x1400000)) ... skipped because path does not exist
5:861  0:000      Checking volume "Preboot" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,E90D06E5463D2143BA0288D9F93F6EA4)) ... skipped because volume is hidden
5:861  0:000      Checking volume "sam10125" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,DFD6D8E6D011C73FA4EF9330A1E51ACD)) ... skipped because path does not exist
5:861  0:000      Checking volume "Recovery" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,274804D5EEA27F46AC105EA989EE698E)) ... skipped because path does not exist
5:861  0:000      Checking volume "VM" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,821501F97BE83B47B765B32FE10DEF8F)) ... skipped because path does not exist
5:861  0:000      Checking volume "sam1015" (PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,981243FB3B4F8A478D820F38963E19F4)) ... skipped because path does not exist
5:861  0:000  === [ ScanLoader ] ========================================
5:861  0:000  - [01]: 'ESP'
5:870  0:009          AddLoaderEntry for Volume Name=ESP
5:870  0:000       skipped because path `PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(1,GPT,2F76E5FA-82FC-456E-AF42-596ED09C6629,0x28,0x64000)\EFI\microsoft\Boot\bootmgfw.efii` already exists for another entry!
5:884  0:014          AddLoaderEntry for Volume Name=ESP
5:899  0:015          AddLoaderEntry for Volume Name=ESP
5:899  0:000          skipped because entry is hidden
5:899  0:000  - [04]: 'sam10'
5:902  0:003          AddLoaderEntry for Volume Name=sam10
5:902  0:000          skipped because entry is hidden
5:902  0:000  - [05]: 'SAMTMP'
5:929  0:026  - [07]: '>AAB0=>28BL'
5:929  0:000  - [10]: 'ESP'
5:932  0:002          AddLoaderEntry for Volume Name=ESP
5:932  0:000       skipped because path `PciRoot(0x0)\Pci(0x1D,0x0)\Pci(0x0,0x0)\NVMe(0x1,13-D0-B5-00-04-0D-08-00)\HD(4,GPT,2904C0ED-6A6B-3A57-F700-11D924345A25,0x1A31C000,0x64000)\EFI\microsoft\Boot\bootmgfw.efii` already exists for another entry!
5:936  0:003          AddLoaderEntry for Volume Name=ESP
5:940  0:004          AddLoaderEntry for Volume Name=ESP
5:940  0:000          skipped because entry is hidden
5:940  0:000  - [11]: 'm2'
5:940  0:000  - [12]: 'DriverCD'
5:940  0:000  - [13]: 'Preboot', hidden
5:940  0:000  - [14]: 'sam10125'
5:946  0:006  - [15]: 'Recovery'
5:947  0:000          AddLoaderEntry for Volume Name=Recovery
5:953  0:006  - [16]: 'VM'
5:954  0:000  - [17]: 'sam1015'
5:977  0:022          AddLoaderEntry for Volume Name=sam1015
5:982  0:004      Check if volume Is Hibernated:
5:982  0:000      Check sleep image 'by signature':
5:983  0:001      using default sleep image name = \private\var\vm\sleepimage
5:983  0:000      sleepimage not found -> Not Found
5:983  0:000      hibernated: no - sign
5:984  0:001  === [ AddCustomTool ] =====================================
5:987  0:002  found tool \EFI\CLOVER\tools\Shell64U.efi
5:987  0:000  Checking EFI partition Volume 1 for Clover
5:990  0:003   Found Clover
5:991  0:001  === [ GetEfiBootDeviceFromNvram ] =========================
5:992  0:000   - efi-boot-device-data: PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,981243FB3B4F8A478D820F38963E19F4)
5:992  0:000    - Volume: 'PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,981243FB3B4F8A478D820F38963E19F4)'
5:992  0:000    - LoaderPath: '<null string>'
5:992  0:000    - Guid = 3504C859-4FCF-446F-8518-F1AAAA5FF7B4
5:992  0:000  === [ FindStartupDiskVolume ] =============================
5:992  0:000    - Volume: partition = PciRoot(0x0)\Pci(0x17,0x0)\Sata(0x4,0xFFFF,0x0)\HD(2,GPT,3504C859-4FCF-446F-8518-F1AAAA5FF7B4,0x65000,0xB232000)\VenMedia(BE74FCF7-0B7C-49F3-9147-01F4042E6842,981243FB3B4F8A478D820F38963E19F4)
5:992  0:000     - searching for that partition
5:992  0:000      - found entry 5. 'Boot macOS from sam1015', Volume 'sam1015'
5:992  0:000  Boot redirected to Entry 5. 'Boot macOS from sam1015'
5:992  0:000  DefaultIndex=5 and MainMenu.EntryCount=12
6:081  0:088  GUI ready
17:136  11:055  exit from MainMenu 4
17:136  0:000  === [ StartLoader ] =======================================
17:136  0:000  Finally: ExternalClock=25MHz BusSpeed=99707kHz CPUFreq=2592MHz PIS: hw.busfrequency=100000000Hz
17:136  0:000  Loading boot.efi  status=Success
17:208  0:072  GetOSVersion: 10.15.3 (19D76)
17:208  0:000  CSR_CFG: CSR_ALLOW_UNTRUSTED_KEXTS | CSR_ALLOW_UNRESTRICTED_FS | CSR_ALLOW_TASK_FOR_PID | CSR_ALLOW_UNRESTRICTED_DTRACE | CSR_ALLOW_UNRESTRICTED_NVRAM
17:208  0:000  Filtering KextPatches:
17:208  0:000   - [00]: AppleIntelLpssI2C (Prevent Apple I2C kexts from attaching to I2C controllers, credit CoolStar) :: PlistPatch :: [OS: 10.15.3 | MatchOS: All | MatchBuild: All] ==> allowed
17:208  0:000   - [01]: AppleIntelLpssI2CController (Prevent Apple I2C kexts from attaching to I2C controllers, credit CoolStar) :: PlistPatch :: [OS: 10.15.3 | MatchOS: All | MatchBuild: All] ==> allowed
17:208  0:000   - [02]: com.apple.iokit.IOUSBHostFamily (USB port limit patch #1 10.14.x modify by DalianSky(credit ydeng)) :: BinPatch :: [OS: 10.15.3 | MatchOS: 10.14.x | MatchBuild: All] ==> not allowed
17:208  0:000   - [03]: com.apple.iokit.IOUSBHostFamily (USB port limit patch #2 10.14.x modify by DalianSky(credit PMHeart)) :: BinPatch :: [OS: 10.15.3 | MatchOS: 10.14.x | MatchBuild: All] ==> not allowed
17:208  0:000   - [04]: com.apple.driver.usb.AppleUSBXHCI (USB Port limit patch #3 10.14.x modify by DalianSky(credits PMheart)) :: BinPatch :: [OS: 10.15.3 | MatchOS: 10.14.x | MatchBuild: All] ==> not allowed
17:208  0:000   - [05]: com.apple.driver.usb.AppleUSBXHCI (USB Port limit patch #4 10.14.x modify by DalianSky(credits PMheart)) :: BinPatch :: [OS: 10.15.3 | MatchOS: 10.14.x | MatchBuild: All] ==> not allowed
17:208  0:000   - [06]: com.apple.iokit.IOUSBHostFamily (USB Port limit patch #1(credits PMheart)) :: BinPatch :: [OS: 10.15.3 | MatchOS: 10.15.x | MatchBuild: All] ==> allowed
17:208  0:000   - [07]: com.apple.driver.usb.AppleUSBXHCI (USB Port limit patch #2(credits PMheart)) :: BinPatch :: [OS: 10.15.3 | MatchOS: 10.15.x | MatchBuild: All] ==> allowed
17:208  0:000  Filtering KernelPatches:
17:208  0:000   - [00]: MSR 0xE2 _xcpm_idle instant reboot(c) Pike R. Alpha :: [OS: 10.15.3 | MatchOS: All | MatchBuild: no] ==> allowed by OS
17:208  0:000   - [01]: Disable panic kext logging on 10.13 release kernel (credit vit9696) :: [OS: 10.15.3 | MatchOS: 10.13.x | MatchBuild: no] ==> not allowed by OS
17:208  0:000   - [02]: Disable panic kext logging on 10.14 release kernel (credit vit9696) :: [OS: 10.15.3 | MatchOS: 10.14.x | MatchBuild: no] ==> not allowed by OS
17:208  0:000  Will not patch boot.efi
17:208  0:000  === [ PatchSmbios ] =======================================
17:209  0:000  insert table 9 for dev 0:0
17:209  0:000  insert table 9 for dev 14:3
17:209  0:000  Table 11 present, but rewritten for us
17:210  0:001  Trusting SMBIOS...
17:210  0:000  Detected alternating SMBIOS channel banks
17:210  0:000  Channels: 2
17:210  0:000  Interleave: 0 2 1 3 4 6 5 7 8 10 9 11 12 14 13 15 16 18 17 19 20 22 21 23
17:210  0:000   partNum=HMA81GS6DJR8N-VK    
17:210  0:000  SMBIOS Type 17 Index = 0 => 0 0:
17:210  0:000  BANK 0 DIMM0 2667MHz 8192MB(Ext:0MB)
17:210  0:000   partNum=99U5700-011.A00G    
17:210  0:000  SMBIOS Type 17 Index = 1 => 1 2:
17:210  0:000  BANK 1 DIMM0 2667MHz 8192MB(Ext:0MB)
17:210  0:000  mTotalSystemMemory = 16384
17:210  0:000  NumberOfMemoryDevices = 2
17:210  0:000  Type20[0]->End = 0x7FFFFF, Type17[0] = 0x2000
17:210  0:000  Type20[1]->End = 0xFFFFFF, Type17[1] = 0x6000
17:210  0:000  Table 131 is present, CPUType=31
17:210  0:000  Change to: 1005
17:210  0:000  === [ PatchACPI ] =========================================
17:210  0:000  Xsdt reallocation done
17:210  0:000  old FADT length=114
17:210  0:000   SignatureFixup: 0xDA77A33A -> 0x0
17:213  0:003  Apply DsdtFixMask=0x08068050
17:213  0:000     drop _DSM mask=0x0000
17:213  0:000  === [ FixBiosDsdt ] =======================================
17:214  0:000  Patching DSDT:
17:214  0:000   - [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, patched at: [ (52) (E) (12) (12) (12) (5E) (12) (12) (89) (12) (C89) (12) (20E) (12) (12) (310C) (610E) (9B8F) (1B) (57) (1D) (3925) (14) (D498) (1B84) (CF8B) (6A2) (10) (2E1) (A) (A) (B) ]
17:215  0:000   - [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, patched at: [ (927) (12) (12) (DA15) (66) (3F) (66) (A7) (DB) (89) (168D4) (19D0) (3935) (8FCC) ]
17:215  0:000   - [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, patched at: [ (12BC3) (12333) (1FAE) ]
17:215  0:000   - [change _DSM to XDSM]: pattern 5F44534D, patched at: [ (41DF) (445) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3A4) (3B3E) (76) (49C) (B) (48A) (5E1) (11) (6B) (22) (22) (3C) (18) (36) (814) (26F0) (E3) (E3) (60E) (C0) (C0) (C0) (C0) (C0) (C0) (C0) (C0) (FC) (106) (106) (152) (2D7) (9E) (58) (A1) (E18) (1DA2) (2AD5) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (A1F) (3348) (2608) (C2EA) ]
17:216  0:000   - [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, patched at: [ (A13F) (AA47) (3) (18) (1C) (1C) (1A) (18) (18) (18) (18) (1EA31) (1A) (1A) (1A) (1A) (1A) (19) (1C) (1C) ]
17:216  0:000   - [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:216  0:000   - [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, patched at: [ (9A7) (12) (1CA) (16) (16) (16) (16) (16) (16) (16) (16) (16) (16) (16) (26) (2F2) (16) (16) (16) (16) (16) (DE3C) (22B3) (27) (28) (28) (28) (28) (28) (29) (29) (29) (29) (29) (31) (27) (28) (28) (28) (28) (28) (29) (29) (29) (29) (29) (218E) (11677) (1A00) (21) (10B) (4D1) (1CF) (20) (20) (20) (20) (20) (104) (20) (20) (20) (20) (20) (2D) (29) (2E) (2E) (2E) ]
17:217  0:000   - [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:217  0:000   - [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, patched at: [ (1550F) ]
17:217  0:000   - [fix RTC _STA bug]: pattern A00A9353, patched at: [ (13040) ]
17:218  0:000    0 replacements
17:219  0:001  found RTC Length not match, Maybe will cause CMOS reset, will patch it.
17:219  0:000  found RTC had IRQNoFlag will move -3 bytes
17:222  0:002  found PIC had IRQNoFlag will move -3 bytes
17:223  0:000  Start HPET Fix
17:226  0:003  NewName HDEF already present, renaming impossible
17:226  0:000  PreCleanup XSDT: count=22, length=212
17:226  0:000  PreCleanup XSDT, corrected XSDT: count=22, length=212
17:226  0:000  === [ ACPIDropTables ] ====================================
17:226  0:000  Patching SSDT CpuSsdt Length=6940
17:226  0:000  0. [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, bin not found / already patched!
17:226  0:000  1. [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, bin not found / already patched!
17:227  0:000  2. [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, bin not found / already patched!
17:227  0:000  3. [change _DSM to XDSM]: pattern 5F44534D, bin not found / already patched!
17:227  0:000  4. [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, bin not found / already patched!
17:227  0:000  5. [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:227  0:000  6. [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, bin not found / already patched!
17:227  0:000  7. [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:227  0:000  8. [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, bin not found / already patched!
17:227  0:000  9. [fix RTC _STA bug]: pattern A00A9353, bin not found / already patched!
17:227  0:000    0 replacements
17:227  0:000  Found OperationRegion(PNVS, SystemMemory, 7ADD9000, ...)
17:227  0:000  Patching SSDT SaSsdt  Length=12742
17:227  0:000  0. [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, patched at: [ (2D) (3A) (46) (2C1) (1C9A) (A3A) (1D) (6AF) ]
17:227  0:000  1. [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, bin not found / already patched!
17:227  0:000  2. [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, bin not found / already patched!
17:227  0:000  3. [change _DSM to XDSM]: pattern 5F44534D, patched at: [ (2C92) (4D2) ]
17:227  0:000  4. [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, bin not found / already patched!
17:227  0:000  5. [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:227  0:000  6. [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, bin not found / already patched!
17:227  0:000  7. [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:227  0:000  8. [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, bin not found / already patched!
17:227  0:000  9. [fix RTC _STA bug]: pattern A00A9353, bin not found / already patched!
17:227  0:000    0 replacements
17:227  0:000  Found OperationRegion(SANV, SystemMemory, 798DD818, ...)
17:227  0:000  Patching SSDT PegSsdt Length=9639
17:227  0:000  0. [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, bin not found / already patched!
17:227  0:000  1. [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, bin not found / already patched!
17:227  0:000  2. [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, bin not found / already patched!
17:227  0:000  3. [change _DSM to XDSM]: pattern 5F44534D, patched at: [ (624) (3BC) (3B6) ]
17:227  0:000  4. [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, bin not found / already patched!
17:227  0:000  5. [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:227  0:000  6. [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, bin not found / already patched!
17:227  0:000  7. [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:227  0:000  8. [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, bin not found / already patched!
17:227  0:000  9. [fix RTC _STA bug]: pattern A00A9353, bin not found / already patched!
17:227  0:000    0 replacements
17:227  0:000  Patching SSDT xh_cfhd4 Length=2431
17:227  0:000  0. [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, bin not found / already patched!
17:227  0:000  1. [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, bin not found / already patched!
17:227  0:000  2. [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, bin not found / already patched!
17:227  0:000  3. [change _DSM to XDSM]: pattern 5F44534D, bin not found / already patched!
17:227  0:000  4. [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, bin not found / already patched!
17:227  0:000  5. [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:227  0:000  6. [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, bin not found / already patched!
17:227  0:000  7. [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:227  0:000  8. [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, bin not found / already patched!
17:227  0:000  9. [fix RTC _STA bug]: pattern A00A9353, bin not found / already patched!
17:227  0:000    0 replacements
17:227  0:000  Patching SSDT ADebTabl Length=324
17:227  0:000  0. [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, bin not found / already patched!
17:227  0:000  1. [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, bin not found / already patched!
17:227  0:000  2. [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, bin not found / already patched!
17:227  0:000  3. [change _DSM to XDSM]: pattern 5F44534D, bin not found / already patched!
17:227  0:000  4. [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, bin not found / already patched!
17:227  0:000  5. [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:227  0:000  6. [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, bin not found / already patched!
17:227  0:000  7. [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:227  0:000  8. [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, bin not found / already patched!
17:227  0:000  9. [fix RTC _STA bug]: pattern A00A9353, bin not found / already patched!
17:227  0:000    0 replacements
17:227  0:000  Found OperationRegion(ADHD, SystemMemory, 785BD000, ...)
17:227  0:000  Found OperationRegion(ABLK, SystemMemory, 785BD020, ...)
17:227  0:000  Patching SSDT SgPeg Length=174
17:227  0:000  0. [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, bin not found / already patched!
17:227  0:000  1. [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, bin not found / already patched!
17:227  0:000  2. [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, bin not found / already patched!
17:227  0:000  3. [change _DSM to XDSM]: pattern 5F44534D, bin not found / already patched!
17:227  0:000  4. [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, bin not found / already patched!
17:227  0:000  5. [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:227  0:000  6. [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, bin not found / already patched!
17:227  0:000  7. [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:227  0:000  8. [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, bin not found / already patched!
17:227  0:000  9. [fix RTC _STA bug]: pattern A00A9353, bin not found / already patched!
17:227  0:000    0 replacements
17:227  0:000  Patching SSDT OptTabl Length=6733
17:227  0:000  0. [change GFX0 to IGPU, optionally pair with SSDT-IGPU.aml]: pattern 47465830, patched at: [ (5D) (28) (6A4) (91) (511) (D2B) (11) ]
17:227  0:000  1. [change HDAS to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 48444153, bin not found / already patched!
17:227  0:000  2. [change HECI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 48454349, bin not found / already patched!
17:227  0:000  3. [change _DSM to XDSM]: pattern 5F44534D, patched at: [ (8D) (687) (12AD) (41) (11) ]
17:227  0:000  4. [change _OSI to XOSI, pair with SSDT-XOSI.aml]: pattern 5F4F5349, bin not found / already patched!
17:227  0:000  5. [change AZAL to HDEF, optionally pair with SSDT-HDEF.aml]: pattern 415A414C, bin not found / already patched!
17:227  0:000  6. [change SAT0 to SATA, optionally pair with SSDT-SATA.aml]: pattern 53415430, bin not found / already patched!
17:227  0:000  7. [change MEI to IMEI, optionally pair with SSDT-IMEI.aml]: pattern 4D45495F, bin not found / already patched!
17:227  0:000  8. [change Method(GPRW,2,N) to XPRW, pair with SSDT-GPRW.aml]: pattern 47505257, bin not found / already patched!
17:227  0:000  9. [fix RTC _STA bug]: pattern A00A9353, bin not found / already patched!
17:227  0:000    0 replacements
17:228  0:000  ApicCPUNum=1
17:228  0:000  Maximum control=0x1A
17:228  0:000  Turbo control=0x2D
17:228  0:000  P-States: min 0x8, max 0x2D
17:228  0:000  SSDT with plugin-type without P-States is generated
17:228  0:000  Cleanup XSDT: count=23, length=220
17:228  0:000  corrected XSDT count=23, length=220
17:228  0:000  === [ RestSetup macOS ] ===================================
17:228  0:000  EdidDiscovered size=128
17:228  0:000  --- Discovered EDID Table size:128
17:228  0:000  000  |  00  FF  FF  FF  FF  FF  FF  00  06  AF
17:228  0:000  010  |  ED  21  00  00  00  00  00  1A  01  04
17:228  0:000  020  |  A5  22  13  78  02  6E  85  93  58  58
17:228  0:000  030  |  92  28  1E  50  54  00  00  00  01  01
17:228  0:000  040  |  01  01  01  01  01  01  01  01  01  01
17:228  0:000  050  |  01  01  01  01  14  37  80  A6  70  38
17:228  0:000  060  |  2E  40  6C  30  AA  00  58  C1  10  00
17:228  0:000  070  |  00  18  00  00  00  0F  00  00  00  00
17:228  0:000  080  |  00  00  00  00  00  00  00  00  00  20
17:228  0:000  090  |  00  00  00  FE  00  41  55  4F  0A  20
17:228  0:000  100  |  20  20  20  20  20  20  20  20  00  00
17:228  0:000  110  |  00  FE  00  42  31  35  36  48  41  4E
17:228  0:000  120  |  30  32  2E  31  20  0A  00  26
17:228  0:000  add device: PciRoot(0x0)/Pci(0x2,0x0)
17:228  0:000     Add key=framebuffer-unifiedmem valuelen=4
17:228  0:000     Add key=framebuffer-patch-enable valuelen=4
17:228  0:000     Add key=framebuffer-con2-enable valuelen=4
17:228  0:000     Add key=framebuffer-con2-alldata valuelen=12
17:228  0:000     Add key=framebuffer-con1-enable valuelen=4
17:228  0:000     Add key=framebuffer-con1-alldata valuelen=12
17:228  0:000     Add key=enable-hdmi20 valuelen=4
17:228  0:000     Add key=device-id valuelen=4
17:228  0:000     Add key=AAPL,ig-platform-id valuelen=4
17:228  0:000  add device: PciRoot(0x0)/Pci(0x1F,0x3)
17:228  0:000     Add key=layout-id valuelen=4
17:228  0:000  Intel UHD Graphics 630 [8086:3E9B] :: PciRoot(0x0)\Pci(0x2,0x0)
17:228  0:000    FakeID Intel GFX = 0x3E9B8086
17:228  0:000    ig-platform-id = 0x3E9B0000
17:228  0:000  Intel GFX revision  = 0x0
17:228  0:000  Intel GFX IntelBacklight
17:228  0:000    LEV2 = 0x80000000, LEVL = 0x0, P0BL = 0x4DE, GRAN = 0xF00
17:228  0:000    LEVW = 0x80000000, LEVX = 0x1D4C0, LEVD = 0x1D4C0, PCHL = 0x0
17:228  0:000    Read IntelMaxValue: 0xFFFF
17:228  0:000    Write new LEVD: 0x1D4C0
17:228  0:000   RCBA disabled; cannot use it
17:228  0:000   setting specified layout-id=6 (0x6)
17:228  0:000  stringlength = 2292
17:229  0:000  CurrentMode: Width=1920 Height=1080
17:229  0:000  Beginning FSInjection
FSInjectionInstall ...
- Our FSI_SIMPLE_FILE_SYSTEM_PROTOCOL installed on handle: 73B92818
FSInjectionInstall ...
- Our FSI_SIMPLE_FILE_SYSTEM_PROTOCOL installed on handle: 73B92818
17:236  0:007  Use origin smbios table type 1 guid.
17:250  0:013  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\Other
17:250  0:000  ->Extra kext: EFI\CLOVER\kexts\Other\WhateverGreen.kext (v.1.3.7)
17:274  0:024  ->Extra kext: EFI\CLOVER\kexts\Other\VoodooPS2Trackpad.kext (v.<null string>)
17:274  0:000  Failed to load extra kext (Info.plist not found): EFI\CLOVER\kexts\Other\VoodooPS2Trackpad.kext
17:274  0:000  ->Extra kext: EFI\CLOVER\kexts\Other\VoodooPS2Keyboard.kext (v.<null string>)
17:274  0:000  Failed to load extra kext (Info.plist not found): EFI\CLOVER\kexts\Other\VoodooPS2Keyboard.kext
17:274  0:000  ->Extra kext: EFI\CLOVER\kexts\Other\VoodooPS2Controller.kext (v.1.9.2)
17:293  0:018      |-- PlugIn kext: EFI\CLOVER\kexts\Other\VoodooPS2Controller.kext\Contents\PlugIns\VoodooPS2Trackpad.kext (v.1.9.2)
17:315  0:022      |-- PlugIn kext: EFI\CLOVER\kexts\Other\VoodooPS2Controller.kext\Contents\PlugIns\VoodooPS2Mouse.kext (v.1.9.2)
17:330  0:015      |-- PlugIn kext: EFI\CLOVER\kexts\Other\VoodooPS2Controller.kext\Contents\PlugIns\VoodooPS2Keyboard.kext (v.1.9.2)
17:354  0:023  ->Extra kext: EFI\CLOVER\kexts\Other\VoodooHDA.kext (v.2.9.2)
17:370  0:016  ->Extra kext: EFI\CLOVER\kexts\Other\VirtualSMC.kext (v.1.1.1)
17:395  0:024  ->Extra kext: EFI\CLOVER\kexts\Other\USBInjectAll.kext (v.0.7.1)
17:856  0:460  ->Extra kext: EFI\CLOVER\kexts\Other\RealtekRTL8111.kext (v.2.2.2)
17:872  0:016  ->Extra kext: EFI\CLOVER\kexts\Other\NullCPUPowerManagement.kext (v.1.0.0d2)
17:884  0:011  ->Extra kext: EFI\CLOVER\kexts\Other\Lilu.kext (v.1.4.2)
17:903  0:018  ->Extra kext: EFI\CLOVER\kexts\Other\IntelBluetoothInjector.kext (v.1.0.3)
17:921  0:018  ->Extra kext: EFI\CLOVER\kexts\Other\IntelBluetoothFirmware.kext (v.1.0.0d2)
17:977  0:055  ->Extra kext: EFI\CLOVER\kexts\Other\FakeSMC_SMMSensors.kext (v.1800)
17:997  0:019  ->Extra kext: EFI\CLOVER\kexts\Other\FakeSMC_GPUSensors.kext (v.1800)
18:022  0:024  ->Extra kext: EFI\CLOVER\kexts\Other\FakeSMC_CPUSensors.kext (v.1800)
18:040  0:018  ->Extra kext: EFI\CLOVER\kexts\Other\FakeSMC_ACPISensors.kext (v.1800)
18:070  0:030  ->Extra kext: EFI\CLOVER\kexts\Other\FakePCIID_Intel_HD_Graphics.kext (v.1.3.15)
18:113  0:042  ->Extra kext: EFI\CLOVER\kexts\Other\FakePCIID_Intel_HDMI_Audio.kext (v.1.3.15)
18:142  0:028  ->Extra kext: EFI\CLOVER\kexts\Other\FakePCIID.kext (v.1.3.15)
18:159  0:016  ->Extra kext: EFI\CLOVER\kexts\Other\CPUFriend.kext (v.1.2.0)
18:181  0:022  ->Extra kext: EFI\CLOVER\kexts\Other\AtherosE2200Ethernet.kext (v.2.2.2)
18:198  0:017  ->Extra kext: EFI\CLOVER\kexts\Other\ApplePS2SmartTouchPad.kext (v.4.6.5)
18:269  0:070  Failed to load extra kext (executable not found): EFI\CLOVER\kexts\Other\ApplePS2SmartTouchPad.kext
18:269  0:000  ->Extra kext: EFI\CLOVER\kexts\Other\AppleALC.kext (v.1.4.5)
19:312  1:042  ->Extra kext: EFI\CLOVER\kexts\Other\ACPIBatteryManager.kext (v.1.90.1)
19:334  0:022  ->Extra kext: EFI\CLOVER\kexts\Other\FakeSMC_LPCSensors.kext (v.1800)
20:087  0:752  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\Off
20:087  0:000  Disabled kext: EFI\CLOVER\kexts\Off\WhateverGreen.kext (v.1.3.6)
20:087  0:000  Disabled kext: EFI\CLOVER\kexts\Off\Lilu.kext (v.1.4.1)
20:087  0:000  Disabled kext: EFI\CLOVER\kexts\Off\FakePCIID_Intel_HD_Graphics.kext (v.1.3.15)
20:087  0:000  Disabled kext: EFI\CLOVER\kexts\Off\FakePCIID_Intel_HDMI_Audio.kext (v.1.3.15)
20:087  0:000  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\10
20:087  0:000  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\10_normal
20:087  0:000  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\10.15
20:087  0:000  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\10.15_normal
20:087  0:000  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\10.15.3
20:087  0:000  Preparing kexts injection for arch=x86_64 from EFI\CLOVER\kexts\10.15.3_normal
20:095  0:008  SetStartupDiskVolume:
20:095  0:000    * Volume: 'sam1015'
20:095  0:000    * LoaderPath: '<null string>'
20:096  0:000    * DevPath: sam1015
20:096  0:000    * GUID = 3504C859-4FCF-446F-8518-F1AAAA5FF7B4
20:096  0:000    * efi-boot-device: <array><dict><key>IOMatch</key><dict><key>IOProviderClass</key><string>IOMedia</string><key>IOPropertyMatch</key><dict><key>UUID</key><string>3504C859-4FCF-446F-8518-F1AAAA5FF7B4</string></dict></dict></dict></array>
20:096  0:000  Custom boot screen not used because entry has unset use graphics
