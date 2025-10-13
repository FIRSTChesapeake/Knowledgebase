---
title:
---
This article will describe how to set up the *FIRST* Chesapeake display Raspberry Pis. All equipment for setting up the scoring system is located in the Scorekeeper Roadcase. You will also need lengths of Ethernet from the Ethernet Tote. The totes can be seen below.
%%TODO: Get picture of scoring and Ethernet tote.%%

1. Retrieve the scorekeeper laptop from the Scorekeeper Roadcase and place it on the scoring table. 

> [!warning]+
> The scorekeeper laptop contains specialized configuration that other components of the field and display system rely on. Use only the scorekeeper laptop to run the scoring software.

2. Start up and configure the initial steps of the FTC-Live software in accordance with the [FTC-Live Setup Guide](https://ftc-resources.firstinspires.org/ftc/event/scoring-setup). Before continuing, at least the first step (data transfer to FTC-Live) needs to be complete. 
3. Remove monitors from the scorekeeper road case.
4. Attach the stands to each monitor using thumbscrews in the plastic container.
5. Place monitors on totes (use ones that are no longer needed for setup) in the center of the back side of the field.
6. Connect each monitor to power using the labeled 25-foot power strips in the scorekeeper road case.
7. Each monitor receives a Raspberry Pi through HDMI connection.  HDMI cables located in the scorekeeper road case.
8. Power the raspberry pi with the USB A to micro USB cable in the scorekeeper road case to the same power strip as the monitor.
9.  Using an appropriate length of Ethernet cable, connect the scorekeeper laptop to one of the Ethernet ports labeled with "LAN" on the Streaming Unit.
	 Scorekeepers may want an Ethernet switch on the scoring table to connect additional devices. If this is desired, obtain an Ethernet switch from the Equipment Manager (located in the A/V Storage Case) and connect the Ethernet cable to any port of the switch instead of directly to the laptop. Use a short cable to connect another port of the switch to the scorekeeper laptop.
10. Using an appropriate length of Ethernet cable, connect the Ethernet cables from each Raspberry Pi back to the two remaining Ethernet ports labeled "LAN" on the Streaming Unit.
 %% TODO: Get a picture of the Streaming Unit and the LAN ports.%%

> [!note]+
>  It does not matter which device goes to which LAN port, use any port for any hookup.

11. Select the appropriate DIP switches for the location of the Raspberry Pi following the diagram below. Note that options with grey slashes over them are not commonly utilized in *FIRST* Chesapeake events and thus should not normally be selected.  
	  ![[Kiosk-Switch-Guide-2.png]]
12. Power up the Raspberry Pi and wait for it to boot. If all goes well, the timing display for the selected field should appear in approximately 90-120 seconds. It may be necessary to plug a USB keyboard in to dismiss the initial popup window. If needed, use the TAB key to advance the cursor forwards and SHIFT+TAB to advance the cursor backwards. Spacebar acts as a click button. The Raspberry Pi kiosk does not support the use of a mouse. 
If the kiosk does not load correctly, refer to the [[Raspberry Pi Kiosk Troubleshooting Guide]] for additional steps.