import React from 'react';

export class UserSignup extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        password_confirm: '',
        artist_name: '',
        city: '',
        country: ''
    }
    render() {
        return (
            <form>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.onChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.onChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChange}
                />
                <input
                    type="password"
                    name="password_confirm"
                    placeholder="Confirm password"
                    value={this.state.password_confirm}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="artist_name"
                    placeholder="Artist name"
                    value={this.state.artist_name}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={this.state.country}
                    onChange={this.onChange}
                />
                
                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default UserSignup;
