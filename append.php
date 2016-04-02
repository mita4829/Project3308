<?php include_once("Widget.html");
    if(isset($_GET["w1"]) && isset($_GET["w2"])){
        $bookName = $_GET["w1"];
        $start = $_GET["w2"];
        $conn = pg_connect("host=ec2-54-225-112-119.compute-1.amazonaws.com port=5432 dbname=de18hj9tfanog1 user=kxizkxtdcxuzet password=FBoL33SMwtqUBKN1yC4bpzv4Ch");
        if(!conn){
            echo "Cannot connect to database";
        }
        $result = pg_query($conn,"SELECT location FROM library WHERE title='".$bookName."';");
        
        $val = pg_fetch_result($result, 0, 0);
        echo "<script type='text/javascript'>endlocation=".$val.";start=".$start.";inc=1;path=[]</script>";
    }
?>