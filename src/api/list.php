<?php
    require('connect.php');
    $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
    $qty = isset($_POST['qty']) ? $_POST['qty'] : 10;
    $sql = "select * from list_s";
    // if($cat){
    //     $sql .= " id='$cat' and"; //select * from goods where category=nike
    // }
    // $sql .= ' 1=1';
    $res = $conn->query($sql);
    $arr = $res->fetch_all(MYSQLI_ASSOC);

    $row = array(
        'data'=>array_slice($arr, ($page_no-1)*$qty,$qty),
        'total'=>count($arr),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>