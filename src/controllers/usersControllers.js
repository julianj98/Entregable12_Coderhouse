import userModel from '../dao/mongo/models/user.js';

const updateUserRole = async (req, res) => {
  const { uid } = req.params;
  
  try {
    // Buscar el usuario por su ID
    const user = await userModel.findById(uid);
    
    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    
    // Cambiar el rol del usuario (de user a premium y viceversa)
    user.rol = user.rol === 'user' ? 'premium' : 'user';
    
    // Guardar los cambios en la base de datos
    await user.save();
    
    res.json({ status: 'success', message: 'User role updated successfully', user });
  } catch (error) {
    console.error('Error updating user role:', error);
    res.status(500).json({ status: 'error', message: 'Error updating user role' });
  }
};

export { updateUserRole };