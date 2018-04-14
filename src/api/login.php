<?php
    require("connect.php");

    $phone = isset($_GET["phone"]) ? $_GET["phone"] : null;
    $password = isset($_GET["password"]) ? $_GET["password"] : null;
    //获取前端加密密码
    $pass = md5($password);
    $sql = "select * from zhuce where phone='$phone' and password='$pass'";
    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "success";
        md5($password) === $pass;
    }else{
        echo "fail";
    }
?>