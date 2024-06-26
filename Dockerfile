# Gunakan image node
FROM node:18

# Buat direktori kerja
WORKDIR /app

# Salin package.json dan install dependensi
COPY package*.json ./
RUN npm install

# Salin sisa kode aplikasi
COPY . .

# Ekspos port aplikasi
EXPOSE 3000

# Jalankan aplikasi
CMD ["node", "app.js"]