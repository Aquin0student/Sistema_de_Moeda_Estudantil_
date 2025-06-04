import React, { useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/style-register';

const Register = ({ navigation }) => {
  const [form, setForm] = useState({
    name: '', email: '', cpf: '', rg: '', address: '', institution: '', course: ''
  });

  const handleChange = (key, value) => setForm(prev => ({ ...prev, [key]: value }));
  const handleSubmit = () => {
    // TODO: Enviar dados ao backend
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Aluno</Text>
      {['name','email','cpf','rg','address'].map(field => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChangeText={text => handleChange(field, text)}
          keyboardType={['cpf','rg'].includes(field) ? 'numeric' : (field === 'email' ? 'email-address' : 'default')}
          autoCapitalize={field === 'email' ? 'none' : 'words'}
        />
      ))}
      <Picker selectedValue={form.institution} onValueChange={val => handleChange('institution', val)} style={styles.pickerContainer}>
        <Picker.Item label="Selecione Instituição" value="" />
      </Picker>
      <Picker selectedValue={form.course} onValueChange={val => handleChange('course', val)} style={styles.pickerContainer}>
        <Picker.Item label="Selecione Curso" value="" />
      </Picker>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Voltar ao Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Register;