<?php
    require('connect.php');

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    $sql = "select * from list_s where id=$id";

    $res = $conn->query($sql);

    $row = $res->fetch_assoc();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>