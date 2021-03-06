import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    
    submitted:boolean;
    source = { title:"ENTER YOUR EMAIL ADDRESS AND RESET YOUR PASSWORD", btnText: "Send"};
    data = [
        {controlName: "email", type: "email", label: "Email", dim: "col-md-12"},
    ]
    forgotForm: FormGroup;
    constructor(private router: Router, 
                // private authen: AuthenticationService,
				private formLog: FormBuilder) { }

    ngOnInit(): void {
        if(localStorage.getItem('currentUser')){
            this.router.navigate(['/home']);
        }
        this.forgotForm = this.formLog.group({  
			'email':['', Validators.compose([Validators.required])],
			  
        });
    }

    navigateToLogin(){
        this.router.navigate(['/login']);
    }
    navigateToRegister(){
        this.router.navigate(['/register']);
    }
    navigateToActiveAccount(){
        this.router.navigate(['/account-activation']);
    }

    onSubmitForm(event){
        console.log(event)
        // this.authen.sendForgottenMail(event.email);
    }

    get f() {
        return this.forgotForm.controls; 
    }
}
