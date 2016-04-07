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
    <td colspan=3>User has his/her machine ready, <a href="https://github.com/mita4829/Project3308/blob/master/index.html">downloaded the HTML file</a> and currently in the directory the file is located</td>
  </tr>
  <tr>
    <th>Post-conditions:</th>
    <td colspan=3>The initial web application page of the Norlin library gyroscope is shown</td>
  </tr>
  <tr>
    <th rowspan=3>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Set up the local web server that can serve a simple HTML file on one's machine and run the command "python -m SimpleHTTPServer 8000"</td>
    <td>Verified that the server is working from the message "Serving HTTP on 0.0.0.0 port 8000 ..."</td>
    <td> </td>
  </tr>
  <tr>
    <td>2. Open a web browser and open the file index.html by running "http://127.0.0.1:8000/index.html"</td>
    <td>The web application is visible, showing the gyroscope outside of Norlin as the first page</td>
    <td> </td>
  </tr>
  <tr>
    <th>Test Result:</th>
    <td colspan=3>Pass / Fail</td>
  </tr>
  <tr>
    <th>Notes:</th>
    <td colspan=3>If the server gives an error message, double check the directory where the server is being run</td>
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
    <td colspan=3>Through the local server, web application, Norlin Walk is visible</td>
  </tr>
  <tr>
    <th>Post-conditions:</th>
    <td colspan=3>Simple activities could be done using the application</td>
  </tr>
  <tr>
    <th rowspan=4>Event Flow:</th>
    <th>Action</th>
    <th>Response</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>1. Click on "Search by title of book"</td>
    <td>Able to type in the book that is to be searched</td>
    <td> </td>
  </tr>
  <tr>
    <td>2. Click on "Starting Location"</td>
    <td>Options pop up: "West Entrance", "East Entrance" and "Current Location"</td>
    <td> </td>
  </tr>
  <tr>
    <td>3. Click on "Search"</td>
    <td>PHP file that can talk to the database of the application is downloaded. If clicked on before tying in the book title, message saying that "No book title given." pops up</td>
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
    <td colspan=3>Ablility to access the web application through local server</td>
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
    <td>1. Valid title of a book is entered in the "Search by title of book" bar</td>
    <td>If the book exists in the application database, the web application loads the next page that show the arrows and the gyroscopes on the way to the destination</td>
    <td>In progress</td>
  </tr>
  <tr>
    <td>2. Follow the arrows that lead to final destination by pressing them</td>
    <td>Each time an arrow is pressed, different gyroscope is loaded on to the application</td>
    <td>In progress</td>
  </tr>
  <tr>
    <td>3. When reached at the final destination, locate the book</td>
    <td>At the final destination, the bookshelf location of the book is noted instead of gyroscope</td>
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
