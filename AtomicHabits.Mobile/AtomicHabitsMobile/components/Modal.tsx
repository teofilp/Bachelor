import React, { PropsWithChildren, ReactElement } from 'react';
import { Modal as RnModal, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/color';
import { IconType } from '../models/iconType';
import CustomIcon from './Icon';

interface ModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const Modal = ({ visible, children, onDismiss }: PropsWithChildren<ModalProps>) => {
  return (
    <RnModal
      transparent
      animationType='slide'
      visible={visible}>
      <View style={styles.modalContainer}>
        <Pressable onPress={onDismiss} style={styles.dismiss}/>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onDismiss}>
              <CustomIcon
                color={Colors.MaximumPurple}
                size={32}
                icon={{
                  name: 'ios-close-outline',
                  type: IconType.Ionicons
                }} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </RnModal>
  )
}

export default Modal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#0000007F',
    flexDirection: 'column'
  },
  modalContent: {
    backgroundColor: Colors.MintCream,
    borderTopEndRadius: 12,
    borderTopStartRadius: 12,
    padding: 32
  },
  header: {
    flexDirection: 'row-reverse'
  },
  dismiss: {
    flex: 1
  }
});