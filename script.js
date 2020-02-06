strict: true

/*
 * - Field of tiles.
 * - Tiles are in matching pairs.
 * - Point of game is to memorize locations of face-down tiles.
 *
 * 3 game states
 *   - Start state: All tiles are face-down, no matches found, and the game is not playing.
 *   - Playing state: The user can select tiles.  Matches can be found.
 *   - End state: All tiles are face-up. All matches found. The game is not playing.
 *
 * Turn states:
 * - none selected.
 * - 1 selected
 * - 2 selected -> "yay matched!" (leave tiles face-up) or "no match; try again" (reset tiles to face-down) -> none selected
 *
 * Tile states:
 * - selectable (face-down)
 * - selectable;  already selected (face-up)
 * - non-selectable (face-up)
 */

// From somewhere, eg. web page.
field.select(someTile)
selectCallback(someTile)
field.select(someOtherTile)
selectCallback(someOtherTile)
// which triggers
foundMatchCallback(someTile, someOtherTile)

// From somewhere, eg. web page.
field.select(someTile)
selectCallback(someTile)
field.select(someOtherTile)
selectCallback(someOtherTile)
// or
notMatchCallback(someTile, someOtherTile)
unselectCallback(someTile)
unselectCallback(someOtherTile)

// click -> element(div) event -> field.select(translation)

/* This should only run in a browser.
 */
if (typeof document !== "undefined") {
  function bootPage() {
    console.log("Learn the Tile Game")
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootPage)
  } else {
    bootPage()
  }
}
/* EOF */
