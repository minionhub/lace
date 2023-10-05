<?php
header("Content-Type:text/css");
$color = "#f0f"; // Change your Color Here
$secondColor = "#ff8"; // Change your Color Here

function checkhexcolor($color){
    return preg_match('/^#[a-f0-9]{6}$/i', $color);
}

if (isset($_GET['color']) AND $_GET['color'] != '') {
    $color = "#" . $_GET['color'];
}

if (!$color OR !checkhexcolor($color)) {
    $color = "#336699";
}


function checkhexcolor2($secondColor){
    return preg_match('/^#[a-f0-9]{6}$/i', $secondColor);
}

if (isset($_GET['secondColor']) AND $_GET['secondColor'] != '') {
    $secondColor = "#" . $_GET['secondColor'];
}

if (!$secondColor OR !checkhexcolor2($secondColor)) {
    $secondColor = "#336699";
}
?>

#phone:focus {
border-color: <?php echo $color ?> !important;
}

.custom_border {
    border-bottom: 1px solid <?php echo $color ?>4f;
}

.custom_border_span {
    border: 1px solid <?php echo $color ?>;
}

.bg-dashborad-card {
background-color: <?php echo $color ?>;
}

.custom--table .thead-dark th {
background: <?php echo $color ?>;
}
.custom--table .thead-dark th:last-child {
border-right: 1px solid <?php echo $color ?>;
}
.table td, .table th {
border-top: 1px solid <?php echo $color ?>30;
}

.site-header .header-top-navbar .info > li > span {
color: <?php echo $color ?>;
}
.site-header .header-top-navbar .info > li {
border-right: 2px dotted <?php echo $color ?>;
}

.site-header .header-top-navbar .header-social-share > li > a:focus, .site-header .header-top-navbar .header-social-share > li > a:hover {
color: <?php echo $color ?>;
}
.site-header .header-top-navbar .user-registration-area .user-reg-btn {
background-color: <?php echo $color ?>;
}

.menu > ul > li > a:before {
background-color: <?php echo $color ?>4d;
}

.menu > ul > li > ul.dropdown-content > li:hover > a {
color: <?php echo $color ?> !important;
}
.search-wrap .search-btn {
border: 1px solid <?php echo $color ?>;
}
.search-wrap .search-btn:hover {
background-color: <?php echo $color ?>;
}

.btn-default {
border: 1px solid <?php echo $color ?>;
background-color: <?php echo $color ?>;
}
.btn-default:hover, .btn-default:focus {
background-color: <?php echo $color ?>;
color: white !important;
}
.btn-white {
color: white;
}

a:hover, a:focus, a:active {
color: <?php echo $color ?>;
}

.search-wrap .search-form button, .search-wrap .search-form input[type="button"], .search-wrap .search-form input[type="reset"], .search-wrap .search-form input[type="submit"] {
background-color: <?php echo $color ?>;
}

.loader {
border: 7px double <?php echo $color ?>;
}
.loader-4:before, .loader-4:after {
background: <?php echo $color ?>;
}

.section-title .title-main:before {
background-color: <?php echo $color ?>;
}

.single-auction-cat .cat-icon {
color: <?php echo $color ?>;
}
.single-auction-cat:hover {
border-color: <?php echo $color ?>4d;
}
.auction-item:hover {
box-shadow: 0px 0px 10px <?php echo $color ?>40;
}
.auction-item {
box-shadow: 0px 0px 5px <?php echo $color ?>1a;
border: 1px solid <?php echo $color ?>24;
}

.auction-item .bid-max {
color: <?php echo $color ?>;
}
.auction-item .item-footer .item-footer-top .bid-timer {
color: <?php echo $color ?>9e;
}

.topbutton {
background-color: <?php echo $color ?>;
}

.winner-item .winner-thumb > img {
border-color: <?php echo $color ?>;
}
.winner-item .winner-thumb .product-icon {
background-color: <?php echo $color ?>;
}

.win-steps-block .card-center .card-icon:before {
border: 1px dashed <?php echo $color ?>;
}
.win-steps-block .card-center .card-icon .step {
background-color: <?php echo $color ?>;
}

.testimonial-item .client-info:before {
background-color: <?php echo $color ?>;
}
.testimonial-item .icon {
color: <?php echo $color ?>4d;
}

.work-brand-block .brands-link {
border: 1px solid <?php echo $color ?>4d;
}

.site-footer {
border-top: 3px solid <?php echo $color ?>;
}
.widget .widget-title:before {
background-color: <?php echo $color ?>;
}
.widget .contact-info .icon, .menu > ul > li > a:hover {
color: <?php echo $color ?>;
}
.widget_links a:hover, .widget_links a:focus, .widget_meta a:hover, .widget_meta a:focus, .widget_nav_menu a:hover, .widget_nav_menu a:focus, .widget_pages a:hover, .widget_pages a:focus, .widget_recent_comments a:hover, .widget_recent_comments a:focus, .widget_recent_entries a:hover, .widget_recent_entries a:focus, .widget_product_categories a:hover, .widget_product_categories a:focus {
color: <?php echo $color ?>;
}

.social-icons li a:hover {
background: <?php echo $color ?>;
}

.breadcrumb .breadcrumb-item > a:before, .breadcrumb .breadcrumb-item > a:hover, .breadcrumb .breadcrumb-item > a:focus {
color: <?php echo $color ?>;
}

.faq-item .faq-title > [class*="icon-"] {
background-color: <?php echo $color ?>;
}
.faq-item .faq-title:hover .title {
color: <?php echo $color ?>;
}
.faq-item .faq-title:hover .right-icon:after, .faq-item .faq-title:hover .right-icon:before {
background-color: <?php echo $color ?>;
}

.post .post-details .entry-header:before {
background-color: <?php echo $color ?>;
}

.post .entry-title a:hover, .post .entry-title a:focus {
color: <?php echo $color ?>;
}
.post .post-details .read-more:hover:before {
border-color: transparent transparent transparent <?php echo $color ?>;
}

.comment-respond .comment-reply-title:before {
background-color: <?php echo $color ?>;
}

.contact-info-item .shape-icon {
color: <?php echo $color ?>;
}
.contact-info-item:hover .shape-icon {
background: <?php echo $color ?>;
}

.form-controller:focus {
border-color: <?php echo $color ?>;
}

.user-register-area .form-header .form-subheading {
color: <?php echo $color ?>;
}
.user-register-area .remember-and-password .btn-password {
color: <?php echo $color ?>;
}

.btn-primary {
background-color: <?php echo $color ?>;
border-color: <?php echo $color ?>;
}
.btn-primary:focus, .btn-primary:active, .btn-primary:hover {
color: <?php echo $color ?> !important;
}

.custom--table tbody tr {
border-left: 1px solid <?php echo $color ?>4d;
}
.custom--table tr td, .custom--table tr th {
border-bottom: 1px solid <?php echo $color ?>4d;
border-right: 1px solid <?php echo $color ?>4d;
}
.custom--table .thead-dark th:not(:last-child) {
border-right: 1px solid <?php echo $color ?>4d;
}

.custom--file-upload ~ label {
background-color: <?php echo $color ?>;
}

.auction-item-details .item-info-area .filter-info-tab .nav-tabs > li > a.active {
background-color: <?php echo $color ?>;
}
.auction-item-details .item-info-area .filter-info-tab .nav-tabs > li > a:hover {
color: <?php echo $color ?>;
}
.auction-item-details .item-bid-price-time .bid-timer {
color: <?php echo $color ?>9e;
}

.section-heading:before {
background-color: <?php echo $color ?>;
}

.page-item.active .page-link {
    background-color: <?php echo $color ?>;
    border-color: <?php echo $color ?>;
}
.pagination .page-item a.active, .pagination .page-item a:hover, .pagination .page-item span.active, .pagination .page-item span:hover {
    background: <?php echo $color ?>;
    border: 1px solid <?php echo $color ?>33;
}

.carousel-nav-align-center .owl-nav > div {
background-color: <?php echo $color ?>;
}

.btn-links-area .btn-links:hover {
background-color: <?php echo $color ?>;
}

.about-info-list .single-info > .icon {
background-color: <?php echo $color ?>;
}

.profile-thumb .profilePicPreview {
border: 3px solid <?php echo $color ?>;
}
.profile-thumb .avatar-edit label {
background-color: <?php echo $color ?>;
}

.auction-item .heading a:hover {
color: <?php echo $color ?>;
}