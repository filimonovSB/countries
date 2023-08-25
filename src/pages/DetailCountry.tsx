import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import arrowIcon from '../assets/icons/arrow-left.svg'
import { useAppDispatch } from '../redux/store'

import { useSelector } from 'react-redux'

import Box from '../components/box/Box'
import CountryDetailBlock from '../components/country-detail/CountryDetailBlock'
import Button from '../components/button/Button'

const DetailCountry: React.FC = () => {


    return (
        <div>
            <Box mt='50px'>
                <Link to='/'>
                    <Button>
                        <img src={arrowIcon} alt="arrow left" /> Back
                    </Button>

                </Link>
            </Box>
            <Box mt='50px'>
                <CountryDetailBlock />
            </Box>
        </div>
    )
}

export default DetailCountry