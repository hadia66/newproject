
<?php
include("Data.php");
session_start();
$x1=(isset($_POST["email"])&&isset($_POST["password"]));
if($x1){}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    if($check_if_login){
        echo ("hellow ".htmlentities($row['first']));
    }else{
        echo'
<form action="create" method="post">
    <input type="text" name="username">
    <input type="password" name="password" id="">
   <button type="submit">submit</button>
    
</form>';}
?>


</body>
</html>