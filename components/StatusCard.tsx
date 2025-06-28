import { Colors } from '@/constants/colors';
import { TaskStatus } from '@/enums/task-status';
import statusStyles from '@/styles/status-cards';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type StatusCardProps = {
  status: TaskStatus;
  count: number;
  backgroundColor: string;
  iconName: keyof typeof Feather.glyphMap;
};

const StatusCard = ({ status, count, backgroundColor, iconName }: StatusCardProps) => {
  // Status card component that goes to tasks screen with status as param
  return (
    <TouchableOpacity 
      style={[statusStyles.statusCard, { backgroundColor }]} 
      onPress={() => router.push({
        pathname: '/tasks',
        params: { status }
      })}
    >
        <View style={statusStyles.statusIcon}>
            <Feather name={iconName} size={24} color={Colors.base} />
        </View>
        <View>
            <Text style={statusStyles.statusTitle}>{status}</Text>
            <Text style={statusStyles.statusCount}>{count} Tasks</Text>
        </View>
    </TouchableOpacity>
  );
};

export default StatusCard;
