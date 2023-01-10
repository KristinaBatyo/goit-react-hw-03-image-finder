
import 'react-toastify/dist/ReactToastify.css';
import {Searchbar, Form, SearchFormButton, SearchFormLabel, SearchFormInput} from "./Searchbar.styled"



    export const Search = ({onChange, onSubmit, value}) => {


        // handleChange = e => {
            
        //     this.setState ({
        //         query: e.currentTarget.value,
        //     })
        // }

        // handleSubmit = e => {
        //     e.preventDefault();
        //     if (this.state.query.trim() === '') {
        //         toast('Enter the name of the picture!');
        //         return;
        //     }
        //     this.props.onSubmit(this.state);

        //     this.reset();
        // }
        
        // reset = () => {
        //     this.setState ({query: '',});
        // };

        
            return(
                <Searchbar>
                <Form onSubmit={onSubmit}>
                    <SearchFormButton type="submit">
                    <SearchFormLabel>Search</SearchFormLabel>
                    </SearchFormButton>
            
                    <SearchFormInput
                    name="name"
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={onChange}
                    value={value}
                    />
                </Form>
                </Searchbar>

            )
        }
    

