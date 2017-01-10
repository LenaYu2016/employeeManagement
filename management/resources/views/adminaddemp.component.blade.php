<div>
    <h1>Add Employee</h1>
    <form [ngFormModel]="myform" (ngSubmit)="onSubmit(myform.value)">
        <div class="row">
        <div class="col-md-5">
    <div class="form-group">
        <span>*</span> <label for="name">Name:</label>
        <input type="text" class="form-control"
               [ngFormControl]="name"
               [ngClass]="{ 'has-error' : !name.valid && name.touched }"/>

    </div>
    <div class="form-group">
        <span>*</span> <label for="gender">Gender:</label>
        <select class="form-control"
                [ngFormControl]="gender" [ngClass]="{ 'has-error' : !gender.valid && gender.touched }">
            <option>Male</option>
            <option>Female</option>
        </select>

    </div>
    <div class="form-group">
        <span>*</span><label for="position">Position:</label>
        <input type="text" class="form-control"
               [ngFormControl]="position"
               [ngClass]="{ 'has-error' : !position.valid && position.touched }"/>

    </div>
        </div>
        <div class="col-md-5 col-md-offset-1">

            <div class="form-group">
                <span>*</span> <label for="department">Department:</label>

                <select class="form-control"
                        [ngFormControl]="department"
                        [ngClass]="{ 'has-error' : !department.valid && department.touched }">
                    <option>Market</option>
                    <option>IT</option>
                    <option>Design</option>
                    <option>Administration</option>
                </select>

            </div>
            <div class="form-group">
                <span>*</span><label for="email">Email:</label>
                <input type="text" class="form-control"
                       [ngFormControl]="email"
                       [ngClass]="{ 'has-error' : (!email.valid && email.touched) || usedemail}"
                       (keyup)="usedEmail(email.value)" (keydown)="setEmail()"/>
            </div>
            <div class="form-group">
                <radio-group [ngFormControl]="role">
                    <span>*</span>  <label for="role">Role:</label>

            <div class="radio">
                <label>
                    <input  type="radio" name="role" value="admin"
                            />
                   Admin
                </label>
            </div>
                <div class="radio">
                    <label >
                        <input  type="radio" name="role" value="employee"
                                 />
                        Employee
                    </label>
                </div>
                </radio-group>
            </div>

        </div>
        </div>

       <div class="row">
           <div class="form-group col-md-1">
           <button type="submit" class="btn btn-primary btn-lg" [disabled]="!myform.valid ||usedemail||!setemail">Add</button>
               </div>
       </div>
        <div>
            <p>
                <span *ngIf="!name.valid && name.touched">Name is required!</span>
            </p>
            <p>
                <span *ngIf="!gender.valid && gender.touched">Gender is required!</span>
            </p>
            <p>
                <span *ngIf="!position.valid && position.touched">Position is required!</span>
            </p>
            <p>
                <span *ngIf="!department.valid && department.touched">Department is required!</span>
            </p>
            <div *ngIf="email.touched">
                <p *ngIf="email.hasError['required']">Email is required</p>
                <p *ngIf="email.hasError['minLength']">Email should be more than 5 characters!</p>
                <p *ngIf="email.hasError['validformat']">Invalid Email!</p>

                <p *ngIf="usedemail">Email has already been in use!</p>

          </div>
            <p>
                <span *ngIf="role.touched">Role is required!</span>
            </p>
        </div>
</form>
</div>