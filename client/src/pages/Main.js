import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Hero from "../components/Hero";
import Table from "../components/Table";


  
class Search extends Component {
    state = {
        employees: [],
        search: "", 
        filteredList: [], 
        sortingOrder: ""
    };

    componentDidMount() {
        API.getRandomEmployee()
            // .then(res => console.log(res)) 
            .then(res => this.setState({ 
                employees: res.data.results, 
                filteredList: res.data.results, 
                sortingEmployees: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
        // this.searchEmployee();
        this.searchEmployee(this.state.search);
    };

    searchEmployee = (value) => {
        console.log('Search', value);
        const filteredList = this.state.employees.filter((employee) => {
            // merge data together, then check to see if employee exists
             return (employee.name.first + "" + employee.name.last).toLowerCase().includes(value.toLowerCase())
          });
              // Update the employee list with the filtered value
              this.setState({ filteredList: filteredList });
              console.log(filteredList);
      };

      onSortChange = () => {
        this.setState({
          employees: this.state.sortingOrder
            ? this.state.employees.sort((a, b) => {
            if (a.name.last < b.name.last) return -1;
            if (a.name.last > b.name.last) return 1;
            return 0;
        })
            : this.state.employees.reverse((a, b) => {
            if (a.name.last < b.name.last) return 1;
            if (a.name.last > b.name.last) return -1;
            return 0;
        }),
          sortingOrder: !this.state.sortingOrder,
        });
    }

    // sortingFunc(props) {
    //     console.log("In sorting Func");
    //     console.log(props.employees);
    //     console.log(props.sortingOrder);
    //     let sortedArr = [...props.employees]
    //     let originalData = [...props.employees]
    //     // console.log("In Sorted Arr");
    //     if (props.sortingOrder === "descending") {
    //         this.setState({ sortingOrder: "ascending" });
    //         console.log("ascending")
    //         console.log(sortedArr.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
    //         originalData.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
    //         this.setState({ employees: originalData, filteredList: sortedArr });
    //     } else if (props.sortingOrder === "ascending") {
    //         this.setState({ sortingOrder: "descending" });
    //         console.log("descending")
    //         console.log(sortedArr.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
    //         originalData.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1);
    //         this.setState({ employees: originalData, filteredList: sortedArr });
    //     } else {
    //         this.setState({ sortingOrder: "ascending" });
    //         console.log("ascending")
    //         console.log(sortedArr.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
    //         originalData.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
    //         this.setState({ employees: originalData, filteredList: sortedArr });
    //     }
    // }
      
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
                        // handleFormSubmit={this.handleFormSubmit}
                        handleInputChange={this.handleInputChange}
                    />
                    {/* <TableHeader></TableHeader> */}
                 <Table 
                    filteredList = {this.state.filteredList}
                    onSortChange = {this.onSortChange}
                 />
                    {/* <SearchResults results={this.state.employees} /> */}
                </Container>
            </div>
        );
    }
}

export default Search;
