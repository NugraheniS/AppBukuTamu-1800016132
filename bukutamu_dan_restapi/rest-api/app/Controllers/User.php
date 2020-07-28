<?php

namespace App\Controllers;

use App\Models\Muser;
use CodeIgniter\RESTful\ResourceController;

class User extends ResourceController
{
   protected $format = 'json';
   protected $modelName = 'use App\Models\Muser';

   public function __construct()
   {
      $this->muser = new Muser();
   }

   public function index()
   {
      $muser  = $this->muser->getUser();

      foreach ($muser as $row) {
         $muser_all[] = [
            'id' => intval($row['id']),
            'nama' => $row['nama'],
            'email' => $row['email'],
            'alamat' => $row['alamat'],
            'kodepos' => $row['kodepos'],
         ];
      }

      return $this->respond($muser_all, 200);
   }

   public function create()
   {
      $nama = $this->request->getPost('nama');
      $email = $this->request->getPost('email');
      $alamat = $this->request->getPost('alamat');

      $data = [
         'nama' => $nama,
         'email' => $email,
         'alamat' => $alamat
      ];

      $simpan = $this->muser->insertUser($data);

      if ($simpan == true) {
         $output = [
            'status' => 200,
            'message' => 'Berhasil menyimpan data',
            'data' => ''
         ];
         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => 400,
            'message' => 'Gagal menyimpan data',
            'data' => ''
         ];
         return $this->respond($output, 400);
      }
   }

   public function show($id = null)
   {
      $muser = $this->muser->getUser($id);

      if (!empty($muser)) {
         $output = [
            'id' => intval($muser['id']),
            'nama' => $muser['nama'],
            'email' => $muser['email'],
            'kodepos' => $muser['kodepos'],
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => 400,
            'message' => 'Data tidak ditemukan',
            'data' => ''
         ];

         return $this->respond($output, 400);
      }
   }

   public function edit($id = null)
   {
      $muser = $this->muser->getUser($id);

      if (!empty($muser)) {
         $output = [
            'id' => intval($muser['id']),
            'nama' => $muser['nama'],
            'alamat' => $muser['alamat'],
            'kodepos' => $muser['kodepos'],
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => 400,
            'message' => 'Data tidak ditemukan',
            'data' => ''
         ];
         return $this->respond($output, 400);
      }
   }

   public function update($id = null)
   {

      $data = $this->request->getRawInput();

  
      $muser = $this->muser->getUser($id);

      
      if (!empty($muser)) {
         
         $updateUser = $this->muser->updateUser($data, $id);

         $output = [
            'status' => true,
            'data' => '',
            'message' => 'sukses melakukan update'
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => false,
            'data' => '',
            'message' => 'gagal melakukan update'
         ];

         return $this->respond($output, 400);
      }
   }

   public function delete($id = null)
   {

      $muser = $this->muser->getUser($id);

      
      if (!empty($muser)) {
         
         $deleteUser = $this->muser->deleteUser($id);

         $output = [
            'status' => true,
            'data' => '',
            'message' => 'sukses hapus data'
         ];

         return $this->respond($output, 200);
      } else {
         $output = [
            'status' => false,
            'data' => '',
            'message' => 'gagal hapus data'
         ];

         return $this->respond($output, 400);
      }
   }
}