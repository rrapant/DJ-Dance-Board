# DJ Dance Board
Quick and dirty app to drive an external display for dances written in Electron.

## Use Case
Dance studios often have displays that are driven by an HDMI connection from a laptop. During dance parties, it is
common to inform the dancers of the current and upcoming dances to avoid confusion;

## Construction
The app displays two browser windows: *console* and *board*.  The console allows the user to select upcoming dances
and render them on the board.  The console can be manipulated/reloaded without impacting the board.

## Usage
  * Download and double click on *Dance Board.app* build for your architecture.
  * Move the *board* window to the external display and make it full screen. Tweak css as necessary.
  * Select the dances to display on the *console* window and hit *render*.