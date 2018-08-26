<?php
    // 引入connect.php
    include 'connect.php';
    
    $id = isset($_GET['id']) ? $_GET['id'] : null;   

    // 查找数据库中的信息 
    // $sql1 = "select * from baojian where id='$id'";
    // $sql2 = "select * from nan where id='$id'";
    // $sql3 = "select * from weichangyao where id='$id'";
    // $sql4 = "select * from xinnao where id='$id'";
    $sql5 = "select * from zhongxiyaopin_jiatingchangyong where id='$id'";


    // 执行sql语句
    $result5 = $conn->query($sql5);
    // $result4 = $conn->query($sql4);

    // $result3 = $conn->query($sql3);

    // $result2 = $conn->query($sql2);

    // $result1 = $conn->query($sql1);



    //使用查询结果集
    //得到数组
    // $row1 = $result1->fetch_all(MYSQLI_ASSOC);
    // $row2 = $result2->fetch_all(MYSQLI_ASSOC);

    // $row3 = $result3->fetch_all(MYSQLI_ASSOC);

    // $row4 = $result4->fetch_all(MYSQLI_ASSOC);

    $row5 = $result5->fetch_all(MYSQLI_ASSOC);



    //释放查询结果集，避免资源浪费
    // $result1->close();
    // $result2->close();
    // $result3->close();

    // $result4->close();

    $result5->close();



    //把结果输出到前台
    // echo json_encode($row1);
    // echo json_encode($row2);
    // echo json_encode($row3);
    // echo json_encode($row4);
    echo json_encode($row5);


    // 关闭数据库，避免资源浪费
    $conn->close();
    
?>