## Who

- Aidan Bohenick (**aibo3269**)
- Dalton Morrow (**daltonmcclain**)
- Jeong Min Lee (**jele5104**)
- Michael Tang (**mita4829**)
- Owen Wattenmaker (**owattenmaker**)


## Title

Norlin Walk


## Vision

**"A personal librarian, finding books made easy, all just on your phone."**


## Automated Tests




## User Acceptance Tests

### UAT 1
<table>
  <tr>
    <th>User:</th>
    <td colspan=3>Faculties or students who go to CU</td>
  </tr>
  <tr>
    <th>Pre-conditions:</th>
    <td colspan=3>User has his/her machine and a browser ready</td>
  </tr>
  <tr>
    <th>Post-conditions:</th>
    <td colspan=3>The initial web application page of the Norlin library gyroscope and search book, set starting location and search barshown</td>
  </tr>
  <tr>
    <th rowspan=3>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Enter the url "www.norlinwalk.herokuapp.com" in the browser</td>
    <td>The first page of the web application is displayed</td>
    <td> </td>
  </tr>
  <tr>
    <td>2. Tap on any of the bars</td>
    <td>Able to enter in the book title, select starting location</td>
  </tr>
  <tr>
    <th>Test Result:</th>
    <td colspan=3>Pass / Fail</td>
  </tr>
  <tr>
    <th>Notes:</th>
    <td colspan=3> </td>
  </tr>
</table>

### UAT 2
<table>
  <tr>
    <th>Users:</th>
    <td colspan=3>Faculties or students who go to CU</td>
  </tr>
  <tr>
    <th>Pre-conditions:</th>
    <td colspan=3>The web application, Norlin Walk is visible</td>
  </tr>
  <tr>
    <th>Post-conditions:</th>
    <td colspan=3>Able to load the next gyroscope in the application when search valid book title</td>
  </tr>
  <tr>
    <th rowspan=4>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Valid title of a book is entered in the "Search by title of book" bar</td>
    <td>If the book exists in the application database, the web application loads the next page that show the arrows and the gyroscopes on the way to the destination</td>
    <td> </td>
  </tr>
  <tr>
    <td>2. Select "Starting Location" and choose one of the locations</td>
    <td>Options pop up: "West Entrance", "East Entrance" and "Current Location. If clicked, starting location set"</td>
    <td> </td>
  </tr>
  <tr>
    <td>3. Click on "Search"</td>
    <td>Web Application loaded to the first path to the book. If clicked on before tying in the book title, message saying that "No book title given." pops up</td>
    <td>In progress</td>
  </tr>
  <tr>
    <th>Test Result:</th>
    <td colspan=3>Pass / Fail</td>
  </tr>
  <tr>
    <th>Notes:</th>
    <td colspan=3> </td>
  </tr>
</table>

### UAT 3
<table>
  <tr>
    <th>Users:</th>
    <td colspan=3>Faculties or students who go to CU</td>
  </tr>
  <tr>
    <th>Pre-conditions:</th>
    <td colspan=3>Able to access the web application and search valid book title</td>
  </tr>
  <tr>
    <th>Post-conditions:</th>
    <td colspan=3>Able to locate where the book to be searched is</td>
  </tr>
  <tr>
    <th rowspan=4>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Follow the arrows that lead to final destination by pressing them</td>
    <td>Each time an arrow is pressed, different gyroscope is loaded on to the application</td>
    <td>In progress</td>
  </tr>
  <tr>
    <td>2. Keep following the arrows and reach the final destination where the book is located</td>
    <td>At the final destination, the bookshelf location of the book is noted</td>
    <td>In progress</td>
  </tr>
  <tr>
    <td>3. Click on the arrow in the direction of the previous path</td>
    <td>Able to go back to previous location</td>
    <td>In progress</td>
  </tr>
  <tr>
    <th>Test Result:</th>
    <td colspan=3>Pass / Fail</td>
  </tr>
  <tr>
    <th>Notes:</th>
    <td colspan=3>In progress</td>
  </tr>
</table>
