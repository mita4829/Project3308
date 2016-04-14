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

Used [QUnit](https://qunitjs.com/) to create automated test cases for [Javascript file](https://github.com/mita4829/Project3308/blob/master/UnitTest/TestMainJS.js).

To run the test cases, download and open the [HTML file](https://github.com/mita4829/Project3308/blob/master/UnitTest/unitTest.html).

### Unit Testing Output
![Unit Test](/UnitTest/UnitTest.png)


## User Acceptance Tests

### UAT 1
<table>
  <tr>
    <th>User:</th>
    <td colspan=3>Faculties or students who go to CU</td>
  </tr>
  <tr>
    <th>Pre-conditions:</th>
    <td colspan=3>User has his/her android smartphone or an Iphone and a browser ready</td>
  </tr>
  <tr>
    <th>Post-conditions:</th>
    <td colspan=3>The initial web application page of the Norlin library gyroscope and "Search by title of book", "Starting Location" and "Search" bar shown</td>
  </tr>
  <tr>
    <th rowspan=3>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Enter the url "https://norlinwalk.herokuapp.com" in the browser</td>
    <td>A web application with a gyroscope near the Norlin library main entrance displayed. "Search by title of book", "Starting Location" and "Search" bars displayed.</td>
    <td> </td>
  </tr>
  <tr>
    <td>2. Hold the phone in landscape direction and rotate while holding the phone</td>
    <td>Gyroscope verified to work properly</td>
    <td> </td>
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
    <td colspan=3>Able to control "Starting Location" bar</td>
  </tr>
  <tr>
    <th rowspan=4>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Leaving other bars as it was, click the "Starting Location" bar</td>
    <td>Option selection with "Starting Location", "West Entrance", "East Entrance", "Current Location" displayed</td>
    <td> </td>
  </tr>
  <tr>
    <td>2. Scroll down to the location the user wants to choose and adjust</td>
    <td>The "Starting Location" bar now displays the location chosen</td>
    <td>If "West Entrance" chosen, "Starting Location" bar now displays "West Entrance"</td>
  </tr>
  <tr>
    <td>3. Click on "Search"</td>
    <td>Error message saying that "No book title given." pops up</td>
    <td> </td>
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
    <td colspan=3>The web application, Norlin Walk is visible with Starting Location chosen</td>
  </tr>
  <tr>
    <th>Post-conditions:</th>
    <td colspan=3>Able to control "Search by title of book" bar and search and load new gyroscope page</td>
  </tr>
  <tr>
    <th rowspan=4>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Click "Search by title of book" bar</td>
    <td>Keyboard pops up so that letters can be entered</td>
    <td> </td>
  </tr>
  <tr>
    <td>2. Enter "Harry Potter"</td>
    <td>Now "Search by title of book" bar displays "Harry Potter"</td>
    <td> </td>
  </tr>
  <tr>
    <td>3. Click on the "Search" bar</td>
    <td>A new gyroscope page loaded on the application, which is the first path to the book "Harry Potter"</td>
    <td> </td>
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
