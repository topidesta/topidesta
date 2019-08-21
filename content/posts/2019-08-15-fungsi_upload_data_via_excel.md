---
template: "post"
title: Function Sederhana Upload Data Via Sheet Excel di Codeigniter
cover: "../images/eksel.png"
date: "2019-08-15T08:00:00Z"
slug: "fungsi-upload-data-excel-ke-tabel-dengan-codeigniter"
keywords: "Fungsi Upload data Excel di Codeigniter"

categories: 
		- trick
tags:
		- windows
    - codeigniter
    - excel
---


***bismillah***

Sekedar catatan kecil gw ajah, karena keseringan digunakan untuk update data master yang ribet input lewat interface, mending dalam format excel, lebih cepet.

Pertama, buat fungsi seperti ini:
~~~php
function disposisi_upload()
{
    $this->load->library(array('PHPExcel','PHPExcel/IOFactory'));

		if ($this->input->post('save')) {
			$type = explode('.', $_FILES["import"]["name"]); // data file
			$type = strtolower($type[count($type)-1]); // data type like .jpg
			// exit(dump($type));
			$inputFileName = "./assets/upload/".uniqid(rand()).'.'.$type; // hash unik
            
			if(in_array($type, array("xls", "xlsx"))) {
				if(is_uploaded_file($_FILES["import"]["tmp_name"])) {
					if(move_uploaded_file($_FILES["import"]["tmp_name"],$inputFileName)) {

						//  Read your Excel workbook
						try {
							$inputFileType = IOFactory::identify($inputFileName);
							$objReader = IOFactory::createReader($inputFileType);
							$objPHPExcel = $objReader->load($inputFileName);
						} catch(Exception $e) {
							die('Error loading file "'.pathinfo($inputFileName,PATHINFO_BASENAME).'": '.$e->getMessage());
						}

						//  Get worksheet dimensions
						$sheet = $objPHPExcel->getSheet(0);
						$highestRow = $sheet->getHighestRow();
						$highestColumn = $sheet->getHighestColumn();

						//  Loop through each row of the worksheet in turn
						for ($row = 2; $row <= $highestRow; $row++) {  				//  Read a row of data into an array 				
							$rowData = $sheet->rangeToArray('A' . $row . ':' . $highestColumn . $row,
								NULL,
								TRUE,
                                FALSE);
                                
							// Insert row data array into your database of choice here
							$data = array(
								"nama"	=> $rowData[1][3],
								"kode_org"	=> $rowData[1][2],
							);
							// exit(dump($rowData[0][1]));
							$this->db->insert("sdm_master_jabatan_detail",$data); // exit(show_last_query());
						}
						echo "Import Success, tunggu sebentar..";
					}
				}
			}
		}
		$this->setFlash('Data eksel berhasil diimport!', 'alert-success');
		redirect('office/upload_disposisi','refresh');
}
~~~
<script src="https://gist.github.com/mdestafadilah/e261f5c4cd33f89a4c705f7a56c45650.js"></script>

Kedua, buat form upload seperti ini:
~~~javascript
<div class="col-xs-12 col-sm-12">
  <div class="box">
    <div class="box-content">
        <h3 class="page-header"><?php echo $title;?></h3>
        <form class="form-horizontal well" action="<?=base_url('officeaction/disposisi_upload');?>" method="post" enctype="multipart/form-data" role="form">
            <div class="form-group">
                <div class="col-sm-3">
                  <td><input type="file" id="import" name="import" multiple="multiple"></td>
              </div>
              <div class="col-sm-3">
                <input type="submit" class="btn btn-primary" value="Import" name="save" />
            </div>
        </div>
    </form>
	</div>
  </div>
</div>
~~~

<script src="https://gist.github.com/mdestafadilah/ca77ee86bc8ed898951711edfc487ae1.js"></script>

Jangan lupa untuk load library, kalo belum ada silahkan download/ clone aja dialamat ini:

https://github.com/mdestafadilah/excel-upload-codeigniter

have a nice day!