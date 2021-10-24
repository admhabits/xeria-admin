<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Xeria - Responsive Admin Dashboard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ URL::asset('assets/images/favicon.ico')}}">
        @include('layouts.head')

    </head>

    <body>
        @include('layouts.topbar')

        <!-- Begin page -->
        <div class="wrapper">
            <!-- ============================================================== -->
            <!-- Start right Content here -->
            @yield('content')
            @include('layouts.right-sidebar')
            <!-- ============================================================== -->
            <!-- End Right content here -->
            <!-- ============================================================== -->
        </div>
        @include('layouts.footer')    
        <!-- END wrapper -->
        @include('layouts.footer-script')    
    </body>
</html>