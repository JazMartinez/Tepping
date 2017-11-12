<?php
$callbackTime = $_POST['select-time'];
$rows = array();

if (isset($_POST['order'])) {
    $rows[] = '<h2>Спасибо за заказ!</h2><p>Скоро ваш пол станет самым <br>красивым на районе</p>';
    $rows[] = 'order';
    echo json_encode($rows);
} else if (isset($_POST['info'])) {
    $rows[] = '<h2>Уже в пути!</h2><p>Скоро вся информация будет <br>у вас на почте</p>';
    $rows[] = 'info';
    echo json_encode($rows);
} else if (isset($_POST['callback'])) {
    $rows[] = '<h2>Будем рады <br>услышать вас!</h2><p>Перезвоним вам <br>'. $callbackTime .'</p>';
    $rows[] = 'callback';
    echo json_encode($rows);
} else {
    echo '<h2>Ошибка!</h2><p>Попробуйте еще раз.</p>';
}
?>