import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Courses from '../components/Courses';
import { CoursesContext } from '../store/coursesContext';
import { getLastWeek } from '../helper/date';




export default function RecentCourses() {

    const coursesContext = useContext(CoursesContext);
    //Son Tarihi Listeleme
    const RecentCourses=coursesContext.courses.filter((course)=>{
const today=new Date();
const dateLastWeek=getLastWeek(today,7);


return course.date >= dateLastWeek && course.date <=today;
    });
    
    
    return <Courses courses={RecentCourses} coursesPeriod="Son Hafta"/>; //Yollamak için

}

const styles = StyleSheet.create({})