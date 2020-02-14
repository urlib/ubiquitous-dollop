<?php
/**
 * VFM - veno file manager index
 *
 * PHP version >= 5.3
 *
 * @category  PHP
 * @package   VenoFileManager
 * @author    Nicola Franchini <info@veno.it>
 * @copyright 2013 Nicola Franchini
 * @license   Exclusively sold on CodeCanyon: http://bit.ly/veno-file-manager
 * @link      http://filemanager.veno.it/
 */
require_once 'vfm-admin/include/head.php';
?>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<!--addby Oblivion-->
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
/* reset */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
body { line-height: 1; }
ol, ul { list-style: none; }
blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
table { border-collapse: collapse; border-spacing: 0; }
body, input, textarea, select, button { font: 12px/1.6em '\5FAE\8F6F\96C5\9ED1', arial, '\5b8b\4f53'; color: #232323; outline: 0; }
a { color: #232323; }
.cb10 { height: 20px; }
/* m-tb */
.m-tb { width: 100%; }
.m-tb th { background-color: #CCCCCC; border: 1px solid #AAA; padding: 8px; }
.m-tb td { background-color: #EFEFEF; border: 1px solid #AAA; padding: 8px; }
.m-tb2 { width: 100%; }
.m-tb2 th { background-color: #dedede; border: 1px solid #666; padding: 8px; }
.m-tb2 td { background-color: #ffffff; border: 1px solid #666; padding: 8px; }
.m-tb3 { width: 45%; }
.m-tb3 th { background-color: #c3dde0; border: 1px solid #a9c6c9; padding: 8px; }
.m-tb3 td { background-color: #d4e3e5; border: 1px solid #a9c6c9; padding: 8px; }
</style>
<!--addby Oblivion-->
    <title><?php print $setUp->getConfig("appname"); ?></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    
    <meta http-equiv="Content-Language" content="<?php print $encodeExplorer->lang; ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="shortcut icon" href="vfm-admin/images/favicon.ico">
    <meta name="description" content="file manager">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <link rel="stylesheet" href="vfm-admin/css/bootstrap.min.css">
    <link rel="stylesheet" href="vfm-admin/vfm-style.css">
    <?php 
    if ($setUp->getConfig("txt_direction") == "RTL") { ?>
        <link rel="stylesheet" href="vfm-admin/css/bootstrap-rtl.min.css">
    <?php 
    } ?>
    <link rel="stylesheet" href="vfm-admin/css/font-awesome.min.css">
    <link rel="stylesheet" href="vfm-admin/skins/<?php print $setUp->getConfig('skin') ?>">
    <script type="text/javascript" src="vfm-admin/js/jquery-1.12.4.min.js"></script>
    <!--[if lt IE 9]>
    <script src="vfm-admin/js/html5.js" type="text/javascript"></script>
    <script src="vfm-admin/js/respond.min.js" type="text/javascript"></script>
    <![endif]-->
    <?php
    $bodyclass = 'vfm-body';
    if ($setUp->getConfig('inline_thumbs') == true) {
        $bodyclass .= ' inlinethumbs';
    } ?>
</head>
    <body id="uparea" class="<?php echo $bodyclass; ?>">
        <div class="overdrag"></div>
            <?php
            /**
            * ************************************************
            * ******************** HEADER ********************
            * ************************************************
            */ 
            $template->getPart('activate');
            $template->getPart('navbar');
            ?>
        <?php
                /**
                * ************************************************
                * ******************** FOOTER ********************
                * ************************************************
                */
                $template->getPart('footer');
                $template->getPart('load-js');
                $template->getPart('modals');
            ?>
            <center>
	<font size='5'>ISP成员</font>
<table class="m-tb3">
<tr>
<th><b>Name</b></th>
<th><b>Link</b></th>
<th><b>Identity</b></th>
</tr>
<tr>
<td>Algha_Porthos</td>
<td><a href="https://53058.blog.luogu.org/"><font color='blue'>53058.blog.luogu.org</font></a></td>
<td>管理组组长</td>
</tr>
<tr>
<td>Oblivion</td>
<td><a href="https://oierlin.cf"><font color='blue'>oierlin.cf</font></a></td>
<td>技术组组长</td>
</tr>
<tr>
<td>McFun</td>
<td><a href="https://github.com/MinecraftFuns"><font color='blue'>github.com/MinecraftFuns</font></a></td>
<td>技术组成员</td>
</tr>
<tr>
<td>jljljl</td>
<td><a href=""><font color='blue'></font></a>None</td>
<td>技术组成员</td>
</tr>
</table>
<br>
	<font size='5'>捐款人员</font>
<table class="m-tb3">
<tr>
<th><b>Name</b></th>
<th><b>Link</b></th>
<th><b>Money</b></th>
</tr>
<tr>
<td>Kingraycao</td>
<td>None</td>
<td>￥5</td>
</tr>
<tr>
<td>浣熊</td>
<td>None</td>
<td>￥50</td>
</tr>
<tr>
<td>wy</td>
<td>None</td>
<td>￥12</td>
</tr>
<tr>
<td>银莲月牙</td>
<td>None</td>
<td>￥24</td>
</tr>
</table>
</center>
    </body>
    
</html>
