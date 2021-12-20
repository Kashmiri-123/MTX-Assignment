import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {User} from './User'


interface POLICY_HOLDER{
  "policyNo":Number;
  "policyHolderName":String;
  "amountOnMaturity":Number;
  "nominee_name":String;
  "monthly_emi":Number;
  "duration":Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  //policy_Holders:POLICY_HOLDER[]=[];
  policyHolderName:any;
  

  title = 'pipe';
  testStr:string="Don is back";
  public money=35000;

  public dateMills=Date.now();
  public date=new Date();
  public dateStr=new Date().toDateString();

  empJson={"id":120,"name":"don","department":"boss"}

  studentJson=[
    {"id":120,"name":"emilia clarke","stream":"science","marks":99},
    {"id":120,"name":"talor swift","stream":"science","marks":99},
    {"id":120,"name":"talor swift","stream":"science","marks":99},
  ]
  insuaranceJson=[
    {"policyNo":110,"policyHolderName":"Emilia Clarke","amountOnMaturity":90000,"nominee_name":"emilia clarke",
      "monthly_emi":9000,"duration":12},
    {"policyNo":120,"policyHolderName":"Taylor Swift","amountOnMaturity":40000,"nominee_name":"emilia clarke",
      "monthly_emi":4000,"duration":12},
    {"policyNo":130,"policyHolderName":"Emma Watson","amountOnMaturity":80000,"nominee_name":"emilia clarke",
      "monthly_emi":5000,"duration":12}
  ]

  public dec=250.12345;
  public percent=2.5;
  public teststr="HakunaMatata";

  public iFar=0;
  public iCel=0;

  public iText="Don is back";

  public advTestStr:string="Munnar";
  public advTestStrStartPos=0;
  public advTestStrEndPos=0;

  alert:boolean=false;
  
  closeAlert(){
    this.alert=false;
  }
  changeText(){
    this.iText="Get to the safe zone"
  }
  number1 = 1;
  number2 = 2;

  policy_Holders:POLICY_HOLDER[]=this.insuaranceJson;

  changeFirstPersonName(){
    this.policy_Holders[0].policyHolderName="Tamara";
  }

  Search(){
    this.policy_Holders=this.insuaranceJson;
    this.policy_Holders=this.policy_Holders.filter(res=>{
      return res.policyHolderName.toLocaleLowerCase().match(this.policyHolderName.toLocaleLowerCase());
    });
  }

  users: User[] = [
    { name: "ahmed", age: 20 },
    { name: "hamza", age: 20 },
    { name: "manel", age: 20 },
    { name: "yosra", age: 20 },
    { name: "jihed", age: 20 },
    { name: "raja", age: 20 }
  ]

  searchTerm = ''

  changeProperty() {
    this.users[0].name = "ghoul";
  }

  changeReference() {
    // const refUsers= Object.assign([], this.users);
    // const refUsers= [...this.users];
    const refUsers = this.users.slice();
    refUsers[0].name = "ghoul";
    this.users = refUsers
    console.log(this.users)
  }
  
  
}
