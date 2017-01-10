<form [hidden]="!showform" class="form-horizontal">
    <h1>Employee Management</h1>
    <div class="form-group">
        <label for="inputEmail3" class="col-sm-2 control-label">Username</label>
        <div class="col-sm-10 col-md-8">
            <input [(ngModel)]="userinfo.username" type="text" class="form-control" id="inputEmail3" placeholder="Username">
        </div>
    </div>
    <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10 col-md-8">
            <input [(ngModel)]="userinfo.password" type="password" class="form-control" id="inputPassword3" placeholder="Password">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
                <label>
                    <input type="checkbox"> Remember me
                </label>
            </div>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-2 col-sm-2 col-md-1 col-xs-3">
            <button type="submit" class="btn btn-default" (click)="login()">Sign in</button>
        </div>
        <p *ngIf="!autheticated && clicked" class="errormessage">Invalid user name or password.</p>
    </div>

</form>
<div id="wrapper" [hidden]="!adminlogin">

    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#">
                    Admin
                </a>
            </li>
            <li>
                <a [routerLink]="['Home']" >Dashboard</a>
            </li>
            <li>
                <a [routerLink]="['Add']">Add Employee</a>
            </li>
            <li>
                <a [routerLink]="['Emplist']">Employee list</a>
            </li>
            <li>
                <a href="#">Events</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">
   <router-outlet></router-outlet>
            </div></div>
</div>
<div id="wrapper" [hidden]="!emplogin">

    <!-- Sidebar -->
    <div id="sidebar-wrapper">
        <ul class="sidebar-nav">
            <li class="sidebar-brand">
                <a href="#">
                    Employee
                </a>
            </li>
            <li>
                <a>Dashboard</a>
            </li>
            <li>
                <a >Update Profile</a>
            </li>
            <li>
                <a >Blogs</a>
            </li>
            <li>
                <a>Check in</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div class="container-fluid">

        </div></div>
</div>