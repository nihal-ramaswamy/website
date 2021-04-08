import React, { useEffect, useRef } from 'react';
import { Calendar } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Box, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../src/components/common/Footer';
import Header from '../src/components/common/Header';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dynamic from 'next/dynamic';

document.addEventListener('DOMContentLoaded', function() {
    let calendarEl: HTMLElement = document.getElementById('calendar')!;  
    let calendar = new Calendar(calendarEl, {
      plugins: [ interactionPlugin, dayGridPlugin, timeGridPlugin, googleCalendarPlugin ],
      googleCalendarApiKey:"***",
      initialView: 'dayGridMonth',
      events:{
          googleCalendarId:'***'
      }
    });
  
    calendar.render();
  });

const CalendarPage = () => {
    const containerRef = useRef();
    const calendarRef = useRef();
    useEffect(()=>{
        let calendar = new Calendar(document.getElementById('calendar'), {
            plugins: [
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                googleCalendarPlugin,
            ],
            googleCalendarApiKey: '***',
            initialView: 'dayGridMonth',
            events: {
                googleCalendarId:
                    '***',
            },
        });
        calendar.render();
    });
    const goToBottom = () => {
        // @ts-ignore
        containerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest',
        });
    };

    return (
        <>
            <Head>
                <title>The Alcoding Club</title>
            </Head>
            <Box ref={containerRef}>
                <Header showApplyBtn goToBottom={goToBottom} />
                <Heading textAlign="center" my="10">
                    Calendar
                </Heading>
                <Box
                    style={{ margin: '0 auto' }}
                    height={{ lg: '80%', base: '100%' }}
                    width={{ lg: '80%', base: '90%' }}
                    id="calendar"
                />
                <Footer />
            </Box>
        </>
    );
};

export default dynamic(() => Promise.resolve(CalendarPage), {
    ssr: false,
  });
