import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import Hero from "../components/Hero";
import Table from "../components/Table";


class Search extends Component {
    state = {
        employees: [],
        search: ""
    };

    componentDidMount() {
        API.getRandomEmployee()
            // .then(res => console.log(res)) 
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        this.searchEmployee(this.state.search);
    };

    searchEmployee = (filter) => {
        console.log('Search', filter);
        const filteredList = this.state.employees.filter((employee) => {
          // merge data together, then check to see if employee exists
          let values = Object.values(employee).join('').toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
        // Update the employee list with the filtered value
        this.setState({ employees: filteredList });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("handleFormSubmit", this.state.search, event);
        this.searchEmployee(this.state.search);
        // API.getDogsOfBreed(this.state.search)
        //   .then(res => {
        //     if (res.data.status === "error") {
        //       throw new Error(res.data.message);
        //     }
        //     this.setState({ results: res.data.message, error: "" });
        //   })
        //   .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
                <Hero>
                    <h1>Employee Directory</h1>
                    <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
                </Hero>
                <Container style={{ minHeight: "80%" }}>
                    <h1 className="text-center"></h1>
                    <SearchForm
                        handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">DOB</th>
                            </tr>
                        </thead>
                        {[...this.state.employees].map((item) => (
                            <Table
                                picture={item.picture.medium}
                                firstName={item.name.first}
                                lastName={item.name.last}
                                email={item.email}
                                phone={item.phone}
                                dob={item.dob.date}
                            />
                        ))}
                    </table>
                    {/* <SearchResults results={this.state.employees} /> */}
                </Container>
            </div>
        );
    }
}

export default Search;
