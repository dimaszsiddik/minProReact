import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

export default ({ createNew,handleToggle,handleChange,handleClose,handleSubmit,handleAddItem,m_souvenirs, m_employee, t_souvenir_stock:{received_by, received_date, note }, items}) => {
    return <Fragment>
        <Button onClick={handleToggle} variant="contained" color="primary" style={{float: 'right'}}>Add</Button>
        <Dialog
            open={createNew}
            onClose={handleClose}
        >
            <DialogTitle id="alert-dialog-title">{"Add Souvenir Stock"}</DialogTitle>
            <form>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                   
                    <TextField label="Transaction Code"  margin="normal" InputLabelProps={{shrink: true}} placeholder="Auto Generated" disabled required/>
                    <br/>
                    <FormControl style={{width:200}} required>
                        <InputLabel shrink htmlFor="employee-simple" >Employee Name </InputLabel>
                        <Select
                            value={received_by}
                            onChange={handleChange('received_by')}
                            inputProps={{
                                name: 'received_by',
                                id: 'employee-simple',
                               
                            }}
                            displayEmpty
                        >
                            <MenuItem value="" >
                                Select Employee Name
                            </MenuItem>
                            {m_employee.map(c => {
                                return(
                                    <MenuItem value={c._id}>{c.first_name} {c.last_name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <br/>
                    {/* <DatePicker></DatePicker>
                    <br/> */}
                    <TextField style={{width:200}} label="Received Date" value={received_date} onChange={handleChange('received_date')} margin='normal' />
                    <br />
                    <TextField style={{width:200}} label="Note" value={note} onChange={handleChange('note')} margin="normal" InputLabelProps={{shrink: true}} placeholder="Type Note" multiline/>&nbsp;
               
            </DialogContentText>
            </DialogContent>

            <DialogContent>
            <Button onClick={handleAddItem} variant="contained" color="primary" style={{float: 'left'}}>Add Item</Button>
            <DialogContentText id="alert-dialog-description">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>No</TableCell>
                        <TableCell>Souvenir Name</TableCell>
                        <TableCell >Qty</TableCell>
                        <TableCell>Note</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        {items.map((n, index) => {
                            return(
                                <TableRow key={n._id}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>
                                    <FormControl style={{width:200}} required>
                        <InputLabel shrink htmlFor="souvenir-simple" >Souvenir Name </InputLabel>
                        <Select
                            value={received_by}
                            onChange={handleChange('m_souvenir_id')}
                            inputProps={{
                                name: 'm_souvenir_id',
                                id: 'souvenir-simple',
                               
                            }}
                            displayEmpty
                        >
                            <MenuItem value="" >
                                Select Souvenir Name
                            </MenuItem>
                            {m_souvenirs.map(c => {
                                return(
                                    <MenuItem value={c._id}>{c.name}</MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                    <br/>
                                    </TableCell>
                                 </TableRow>
                            );
                        })}
                </TableBody>
            </Table>

            </DialogContentText>
            </DialogContent>
            </form>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
            </Button>
                <Button onClick={handleSubmit} color="primary" autoFocus>
                    Save
            </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}