import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { TextValidator} from 'react-material-ui-form-validator';
import { ValidatorForm } from 'react-form-validator-core';
import FlatButton from 'material-ui/FlatButton'
import toastr from 'toastr';
import { Redirect } from 'react-router-dom';



class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
        content: {
        full_name:'',
        email:'',
        phone_number:'',
        stack:'',
        stack_details:'',
        facebook_profile:'',
        gitprofile:'',
        blog_url:'',
        linkedinprofile:'',
        slackteam:''
        },
        logout:false
    }
    this.onChange = this.onChange.bind(this);
   
  }
 
  handleClick(event){
      const apiUrl = 'https://bot-production.herokuapp.com/register'
      axios.post(apiUrl, this.state.content)
      .then(response=>toastr.success(response.data))
      .catch(error=>toastr.error("Sorry we couldn't register you."))
      
  };
  onChange(event) {
    const field = event.target.name;
    const value = event.target.value;
    const content = this.state.content;
    content[field] = value;
    this.setState({ content })

};
logout(event) {
    //your submit logic
  return <Redirect to="/"/>
    
    
};

  render() {
    return (
      <div>

        <MuiThemeProvider>
          <div>
          <nav className="navbar navbar-inverse navbar-static-top navbar-default" role="navigation">
          <div className="container">
      
	        <div className="navbar-header">
	          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	            <span className="icon-bar"></span>
	          </button>
	          <h2 className="navbar-brand" href="#">Become A Mentor</h2>
	        </div>
	        
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
	          <li>
	          	<FlatButton onClick={(event) => this.logout(event)}>logout</FlatButton>
	          </li>
          </ul>
        </div>
        
      </div>
    </nav>
    <div className="panel panel-default">
    <div className="panel-body">
            <ValidatorForm
                ref="form"
                onSubmit={this.onChange}
                onError={errors => console.log(errors)}
            >
           <div className='App-left'>
           <TextValidator
              hintText="Enter your Full Names"
              floatingLabelText="Full Name"
              name="full_name"
              value = {this.state.content.full_name}
              onChange = {this.onChange}
              validators={['required']}
              errorMessages={['this field is required']}
              />
            <br/>
            <TextValidator
              hintText="Enter your Email" 
              floatingLabelText="Email"
              name="email"
              value = {this.state.content.email}
              onChange = {this.onChange}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
              />
              <br/>
              <TextValidator
              hintText="Enter your PhoneNumber"
              floatingLabelText="Phone Number"
              name="phone_number"
              value = {this.state.content.phone_number}
              onChange = {this.onChange}
              validators={['required']}
              errorMessages={['this field is required']}
              />
            <br/>
            <TextValidator
              hintText="Enter your Facebook Profile URL"
              floatingLabelText="Facebook Profile URL (Optional)"
              name="facebook_profile"
              value = {this.state.content.facebook_profile}
              onChange = {this.onChange}
              validators={['required']}
              errorMessages={['this field is required']}
              />
              <br/>
              <br/>
              <TextValidator
              hintText="Enter your Linkedin Profile URL"
              floatingLabelText="Linkedin Profile URL (Optional)"
              name="linkedinprofile"
              value = {this.state.content.linkedinprofile}
              onChange = {this.onChange}
              validators={['required']}
              errorMessages={['this field is required']}
              />  
            <br/>
           </div>
           
           <div className='App-right'>
           <TextValidator
             hintText="Enter your stack"
             floatingLabelText="Stack(Eg. Python, Java)"
             name="stack"
             value = {this.state.content.stack}
             onChange = {this.onChange}
             validators={['required']}
             errorMessages={['this field is required']}
            />
             <br/>
             <TextValidator
             hintText="Enter your stack details"
             floatingLabelText="Stack Details(Eg. Flask, Spring)"  
             name="stack_details"
             value = {this.state.content.stack_details}
             onChange = {this.onChange}
             validators={['required']}
             errorMessages={['this field is required']}
             />
             <br/>
             <TextValidator
             hintText="Enter your Github Profile Link"
             floatingLabelText="Github Profile Link (Optional)"
             name="gitprofile"
             value = {this.state.content.gitprofile}
             onChange = {this.onChange}
             validators={['required']}
             errorMessages={['this field is required']}
             />
             <br/>
             <TextValidator
             hintText="Enter name of slack team"
             floatingLabelText="Do you have a Slack team?"
             name="slackteam"
             value = {this.state.content.slackteam}
             onChange = {this.onChange}
             validators={['required']}
             errorMessages={['this field is required']}
             />  
           <br/>
           <br/>
           <TextValidator
             hintText="Enter link to your blog"
             floatingLabelText="Do you have a blog?"
             name="blog_url"
             value = {this.state.content.blog_url}
             onChange = {this.onChange}
             validators={['required']}
             errorMessages={['this field is required']}
             />  
           <br/>
           </div>
           <RaisedButton label="SignUp as Mentor" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           <div className='Button-center'>
           
          </div>
          </ValidatorForm>
          </div>
          </div>
          </div>
         </MuiThemeProvider>
         </div>
    );
  }
}
const style = {
  margin: 15,
  backgroundColor: '#5cb85c',
  align:'center'
  
};
export default Register;