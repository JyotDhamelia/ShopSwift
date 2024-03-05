import {instanceOf} from 'prop-types';
import { Component } from 'react';
import { Cookies } from 'react-cookie';

export class IsLogedIn2 extends Component
{
    static propTypes = 
    {
        cookies : instanceOf(Cookies).isRequired,
    };

    constructor(props)
    {
        super(props);
        try
        {
            this.userid = this.props.cookies.get('userid') || undefined;
        }
        catch(error)
        {
            this.userid = undefined;
        }
        if(this.userid === undefined){
            alert('Please Log In');
            window.location = '/';
        }
    }
}