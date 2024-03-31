import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Courses from '../components/Courses';

export default function RecentCourses() {
    return <Courses coursesPeriod="Son Hafta"/>; //Yollamak için

}

const styles = StyleSheet.create({})