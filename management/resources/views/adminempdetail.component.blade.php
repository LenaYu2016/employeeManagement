<div>
    <h1>
        Employee detail
    </h1>
    <div>
        <name  *ngIf="passedemp"[passedemp]="passedemp"></name>
        <position *ngIf="passedemp" [passedemp]="passedemp"></position>
        <department *ngIf="passedemp" [passedemp]="passedemp"></department>
        <p  *ngIf="passedemp">Gender:{{passedemp.gender}}</p>
        <p  *ngIf="passedemp&&passedemp">Email:{{passedemp.email}}</p>
        <p *ngIf="passedemp &&passedemp.address==null">Address: Not available</p>
        <p *ngIf="passedemp &&passedemp.address!=null">Address: {{passedemp.address}}</p>
        <p *ngIf="passedemp &&passedemp.phone==null">Phone: Not available</p>
        <p *ngIf="passedemp &&passedemp.phone!=null">Phone: {{passedemp.phone}}</p>
        <role *ngIf="passedemp" [passedemp]="passedemp"></role>

    </div>
</div>