<div>
    <h1>Employees List</h1>
    <div>
        <table class="table table-hover">
            <thead class="thead-inverse">
            <tr>
                <th></th>

                <th>Name</th>
                <th>Position</th>
                <th>Department</th>

                <th colspan="3">Operate</th>

            </tr>
            </thead>
            <tbody>
            <tr *ngFor="#emp of emplist">
                <th scope="row">{{emp.id}}</th>
                <td><a>{{emp.name}}</a></td>
                <td>{{emp.position}}</td>
                <td>{{emp.department}}</td>

                <th><a (click)="sendEmail(emp.name,emp.id)"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></a></th>
                <th><a [routerLink]='["Empdetail",{empid:emp.id}]'><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></a></th>
                <th><a (click)="deleteById(emp.id)"><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></a></th>
            </tr>
            </tbody>
        </table>
        <div>
            <modal #modal [keyboard]="false" [backdrop]="'static'">
                <modal-header>
                    <h4 class="modal-title">Send Email to {{name}}</h4>
                </modal-header>
                <modal-body>
                    <form >
                        <div class="form-group">
                    <label>Subject:</label><input autofocus type="text" class="form-control" #subject/>
                        </div>
                        <div class="form-group">
                        <label>Message:</label><textarea type="text" class="form-control" #message></textarea>
        </div>
                    </form>
                </modal-body>
                <modal-footer>
                    <button type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Cancel</button>
                    <button type="button" class="btn btn-primary" (click)="send(subject.value,message.value)">Send</button>
                </modal-footer>
            </modal>
        </div>
        <div>
            <modal #modalall [keyboard]="false" [backdrop]="'static'">
                <modal-header>
                    <h4 class="modal-title">Send Email to All</h4>
                </modal-header>
                <modal-body>
                    <form >
                        <div class="form-group">
                            <label>Subject:</label><input autofocus type="text" class="form-control" #subject/>
                        </div>
                        <div class="form-group">
                            <label>Message:</label><textarea type="text" class="form-control" #message></textarea>
                        </div>
                    </form>
                </modal-body>
                <modal-footer>
                    <button type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Cancel</button>
                    <button type="button" class="btn btn-primary" (click)="allSend(subject.value,message.value)">Send</button>
                </modal-footer>
            </modal>
        </div>
        <div><button class="btn btn-primary" (click)="sendAll()">Send to all</button></div>
    </div>
</div>