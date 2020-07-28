<?php

namespace App\Models;

use CodeIgniter\Model;

class Muser extends Model
{
   protected $table = 'user';

   public function getUser($id = false)
   {
      if ($id === false) {
         return $this->findAll();
      } else {
         return $this->getWhere(['id' => $id])->getRowArray();
      }
   }

   public function insertUser($data)
   {
      $query = $this->db->table($this->table)->insert($data);
      if ($query) {
         return true;
      } else {
         return false;
      }
   }

   public function updateUser($data, $id)
   {
      return $this->db->table($this->table)->update($data, ['id' => $id]);
   }

   public function deleteUser($id)
   {
      return $this->db->table($this->table)->delete(['id' => $id]);
   }
}