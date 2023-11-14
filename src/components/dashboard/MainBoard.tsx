import React from 'react'
import '../../styles/dashboard.css'
import Selector from '../Selector';
import { table_rows } from '../../data/board';
import Checkbox from '@mui/material/Checkbox';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';

const sort_options = [
    {
        name: 'Today'
    }, {
        name: 'Yesterday'
    }, {
        name: 'This week'
    }, {
        name: 'This month'
    }, {
        name: 'Select Date'
    }
];

const stats = [
    {
        quantity: 252,
        icon: '/icons/frame1.svg',
        label: 'Links Scraped',
        borderColor: '#3e97ff'
    }, {
        quantity: 252,
        icon: '/icons/frame2.png',
        label: 'Links Manually Checked',
        borderColor: '#7239ea'
    }, {
        quantity: 252,
        icon: '/icons/frame3.png',
        label: 'Link Violations',
        borderColor: '#f6c000'
    }, {
        quantity: 252,
        icon: '/icons/frame4.png',
        label: 'Links Removed',
        borderColor: '#ff0000'
    },
];

const SortPanel = () => {
    return(
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <div className='title_secondary'>
                Sort by
            </div>
            <div className='selector' style={{backgroundColor:'white'}}>
                <div className='title_secondary'>Select</div>
                <Selector options={sort_options}/>
            </div>
        </div>
    )
}

const Statistics = () => {
    return(
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'nowrap', gap: 25, justifyContent: 'space-between'}}>
            {stats.map((item, id) => {
                return(
                    <div 
                        key={id}
                        style={{
                            width: '100%',
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '10px',
                            borderBottom: `3px solid ${item.borderColor}`
                        }}>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <span style={{fontSize: '32px', fontWeight: '600'}}>{item.quantity}</span>
                            <img src={item.icon} />
                        </div>
                        <span className='title_secondary'>{item.label}</span>
                    </div>
                )
            })}
        </div>
    )
}

const Board = () => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const rowsPerPage = 4;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = table_rows.slice(indexOfFirstRow, indexOfLastRow);

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };
    return (
        <div style={{padding: '20px', backgroundColor: 'white', borderRadius: '10px'}}>
            <div className='board_header'>
                <div>
                    <form className='board_form'>
                        <img src='/icons/profile-circle.svg'/>
                        <input placeholder='search' className='board_input'/>
                    </form>
                </div>
                <div style={{display: 'flex', gap: 15}}>
                    <Button
                        variant='contained'
                        endIcon={<DriveFolderUploadRoundedIcon sx={{color: '#3e97ff'}} fontSize='small'/>}
                        sx={{ textTransform: 'capitalize', backgroundColor: '#eef6ff', boxShadow: 'none', color:'#3e97ff', fontSize: '12px', fontWeight: '600'}}
                    >
                        Export
                    </Button>
                    <div className='selector' style={{backgroundColor:'#f2f2f2'}}>
                        <div className='title_secondary'>Select</div>
                        <Selector options={[]}/>
                    </div>
                    <div className='selector' style={{backgroundColor:'#f2f2f2'}}>
                        <div className='title_secondary'>Status</div>
                        <Selector options={[]}/>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                    <th><Checkbox sx={{padding: "0px"}}/></th>
                        <th>ID</th>
                        <th>DATE REMOVED</th>
                        <th>LINK</th>
                        <th>SOURCE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map(row => (
                        <tr key={row.id} >
                            <td style={{width: '30px'}}><Checkbox sx={{padding: "0px"}}/></td>
                            <td style={{color: '#212121'}}>{row.id}</td>
                            <td>{row.date_removed}</td>
                            <td style={{color: '#3e97ff'}}>{row.link}</td>
                            <td>{row.source}</td>
                            <td>{row.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px'}}>
                <div className='selector' style={{backgroundColor: '#f2f2f2', fontSize: '12px', color: '#bebebe', fontWeight: '600'}}>Total result: {table_rows.length}</div>
                <div>
                    <Stack spacing={2}>
                        <Pagination 
                            count={Math.ceil(table_rows.length / rowsPerPage)}
                            shape="rounded"
                            color="primary"
                            page={currentPage}
                            onChange={handlePageChange}
                        />
                    </Stack>
                </div>
            </div>
        </div>
      );
}

const MainBoard = () => {
  return (
    <div className='dashboard_main'>
        <div style={{width: '100%', display: 'flex', justifyContent:'flex-end'}}>
            <SortPanel/>
        </div>

        <div style={{width: '100%'}}>
            <Statistics/>
        </div>
        <div style={{width: '100%'}}>
            <Board/>
        </div>
    </div>
  )
}

export default MainBoard