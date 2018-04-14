<?php
    require('connect.php');
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;
    $isdel = isset($_GET['isdel']) ? $_GET['isdel'] : null;
    $data = $conn->query("select * from buycar where id='$id'");
    $row = $data->fetch_all(MYSQLI_ASSOC);
    
    if($id){
        $update ="update buycar set qty=$qty where id='$id'";
        $res =$conn->query($update);
    };
    if($isdel){
        $delete = "delete from buycar where id='$id'";
        $_del =$conn->query($delete);
    }else{
        $delete = "delete from buycar";
        // $_del =$conn->query($delete);
    };
    $sql = "select * from buycar";
    $_res = $conn->query($sql);
    $arr = $_res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr,JSON_UNESCAPED_UNICODE);
?>