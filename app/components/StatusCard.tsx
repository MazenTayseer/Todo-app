import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/colors';
import { TaskStatus } from '../enums/task-status';
import styles from '../styles/styles';

type StatusCardProps = {
  status: TaskStatus;
  count: number;
  backgroundColor: string;
  iconName: keyof typeof Feather.glyphMap;
};

const StatusCard = ({ status, count, backgroundColor, iconName }: StatusCardProps) => {
  return (
    <TouchableOpacity 
      style={[styles.statusCard, { backgroundColor }]} 
      onPress={() => router.push({
        pathname: '/tasks',
        params: { status }
      })}
    >
        <View style={styles.statusIcon}>
            <Feather name={iconName} size={24} color={Colors.base} />
        </View>
        <View>
            <Text style={styles.statusTitle}>{status}</Text>
            <Text style={styles.statusCount}>{count} Tasks</Text>
        </View>
    </TouchableOpacity>
  );
};

export default StatusCard;
