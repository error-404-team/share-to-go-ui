import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import getSuggestions from './getSuggestions';
import renderSuggestion from './renderSuggestion';
import renderInput from './renderInput'




const styles = theme => ({
    root: {
      flexGrow: 1,
      height: 250,
    },
    container: {
      flexGrow: 1,
      position: 'relative',
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0,
    },
    chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    inputRoot: {
    //   flexWrap: 'wrap',
    },
    inputInput: {
    //   width: 'auto',
      flexGrow: 1,
    },
    divider: {
      height: theme.spacing.unit * 2,
    },
  });

class DownshiftMultiple extends React.Component {
    state = {
        inputValue: '',
        selectedItem: [],
    };

    handleKeyDown = event => {
        const { inputValue, selectedItem } = this.state;
        if (selectedItem.length && !inputValue.length && event.key === 'Backspace') {
            this.setState({
                selectedItem: selectedItem.slice(0, selectedItem.length - 1),
            });
        }
    };

    handleInputChange = event => {
        this.setState({ inputValue: event.target.value });
    };

    handleChange = item => {
        let { selectedItem } = this.state;

        if (selectedItem.indexOf(item) === -1) {
            selectedItem = [...selectedItem, item];
        }

        this.setState({
            inputValue: '',
            selectedItem,
        });
    };

    handleDelete = item => () => {
        this.setState(state => {
            const selectedItem = [...state.selectedItem];
            selectedItem.splice(selectedItem.indexOf(item), 1);
            return { selectedItem };
        });
    };

    render() {
        const { classes } = this.props;
        const { inputValue, selectedItem } = this.state;

        return (
            <Downshift
                id="downshift-multiple"
                inputValue={inputValue}
                onChange={this.handleChange}
                selectedItem={selectedItem}
            >
                {({
                    getInputProps,
                    getItemProps,
                    isOpen,
                    inputValue: inputValue2,
                    selectedItem: selectedItem2,
                    highlightedIndex,
                }) => (
                        <div className={classes.container}>
                            {renderInput({
                                fullWidth: true,
                                classes,
                                InputProps: getInputProps({
                                    startAdornment: selectedItem.map(item => (
                                        // <Chip
                                        //     key={item}
                                        //     tabIndex={-1}
                                        //     label={item}
                                        //     className={classes.chip}
                                        //     onDelete={this.handleDelete(item)}
                                        // />
                                        <p>{item}</p>
                                    )),
                                    onChange: this.handleInputChange,
                                    onKeyDown: this.handleKeyDown,
                                    placeholder: this.props.placeholder,
                                }),
                                // label: 'Label',
                            })}
                            {isOpen ? (
                                <Paper className={classes.paper} square>
                                    {getSuggestions(inputValue2).map((suggestion, index) =>
                                        renderSuggestion({
                                            suggestion,
                                            index,
                                            itemProps: getItemProps({ item: suggestion.label }),
                                            highlightedIndex,
                                            selectedItem: selectedItem2,
                                        }),
                                    )}
                                </Paper>
                            ) : null}
                        </div>
                    )}
            </Downshift>
        );
    }
}

DownshiftMultiple.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (DownshiftMultiple)