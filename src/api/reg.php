<?php

    // require("connect.php");

    // $name = isset($_GET["username"]) ? $_GET["username"] : null;
    // $password = isset($_GET["password"]) ? $_GET["password"] : null;
    // $type = isset($_GET["type"]) ? $_GET["type"] : null;
    // // 查找数据库判断用户名是否存在
    // $sql = "select name from user where name='$name'";

    // $result = $conn->query($sql);
    // // var_dump($result);
    // if($result->num_rows>0){
    //     echo "fail";
    // }else{
    //     if($type === "reg"){
    //         //加密
    //         $password = md5($password);
    //         //注册，保存到数据库
    //         $sql = "insert into user(name,password) values('$name','$password')";

    //         $result = $conn->query($sql);
    //         if($result){
    //             echo "success";
    //         }else{
    //             echo "fail";
    //         }
    //     }else{
    //         // 验证用户名可注册
    //         echo "success";
    //     }
    // }
    require("connect.php");

    $phone = isset($_GET["phone"]) ? $_GET["phone"] : null;
    $password = isset($_GET["password"]) ? $_GET["password"] : null;
    $type = isset($_GET["type"]) ? $_GET["type"] : null;
    // echo $phone;
    // // echo $password;
    // echo md5($password);
    $sql = "select phone from zhuce where phone='$phone'";

    $result = $conn->query($sql);

    if($result->num_rows>0){
        echo "fail";
    }else{
        if($type === "reg"){
            //加密
            $password = md5($password);

            //注册，保存到数据库
            $sql = "insert into zhuce(phone,password) values('$phone','$password')";

            $result = $conn->query($sql);
            if($result){
                echo "success";
            }else{
                echo "fail";
            }
        }else{
            //验证用户名可注册
            echo "success";
        }  
    }
?>