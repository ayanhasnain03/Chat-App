import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Container, Input, Paper, Stack, Button, Typography, IconButton } from '@mui/material'
import AdminPannelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import SearchIcon from '@mui/icons-material/Search'
import moment from 'moment'

const Dashboard = () => {
  const Appbar = (
    <Paper
      elevation={10} // Higher elevation for more depth
      sx={{
        padding: '2rem',
        margin: '2rem 0',
        borderRadius: '20px', // Softer radius for a professional look
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        textAlign: 'center',
        boxShadow: '0 16px 32px rgba(0, 0, 0, 0.1)', // Smooth shadows for more depth
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <AdminPannelSettingsIcon sx={{ fontSize: '3.5rem', color: '#FF6347' }} />
        
        <Stack direction="row" spacing={1} alignItems="center" sx={{ border: '1px solid #ddd', borderRadius: '30px', padding: '0.5rem', backgroundColor: '#f9f9f9', width: '100%', maxWidth: '400px' }}>
          <IconButton sx={{ color: '#FF6347' }}>
            <SearchIcon />
          </IconButton>
          <Input
            placeholder="Search"
            type="search"
            disableUnderline
            sx={{
              flex: 1,
              padding: '0.75rem 1rem',
              fontSize: '1rem',
              '&:focus': {
                borderColor: '#FF6347',
              },
            }}
          />
        </Stack>

        <Button
          variant="contained"
          sx={{
            backgroundImage: 'linear-gradient(to right, #FF6347, #FF4500)', // Gradient background
            color: 'white',
            borderRadius: '30px',
            padding: '0.75rem 1.5rem',
            fontWeight: 600,
            letterSpacing: '1px',
            transition: 'background 0.3s ease, transform 0.2s ease',
            '&:hover': {
              backgroundImage: 'linear-gradient(to right, #FF4500, #FF6347)', // Hover effect with gradient flip
              transform: 'scale(1.05)', // Subtle scaling on hover
            },
          }}
        >
          Search
        </Button>
      </Stack>

      <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 300, fontSize: '1.1rem', marginTop: '1rem' }}>
        {moment().format('dddd, MMMM D, YYYY')}
      </Typography>
    </Paper>
  )

  return (
    <AdminLayout>
      <Container component="main" sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
        {Appbar}
      </Container>
    </AdminLayout>
  )
}

export default Dashboard
