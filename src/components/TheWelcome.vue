<script setup>
import { ref } from 'vue';

const isPinned = ref(true);

function toggleSidenav() {
  console.log(isPinned.value)
  isPinned.value = !isPinned.value;
  const sidenavShow = document.getElementsByClassName('g-sidenav-show')[0];
  if (isPinned.value) {
    sidenavShow.classList.add('g-sidenav-pinned');
    sidenavShow.classList.remove('g-sidenav-hidden');
  } else {
    sidenavShow.classList.add('g-sidenav-hidden');
    sidenavShow.classList.remove('g-sidenav-pinned');
  }
}
</script>

<template>
  <body class="g-sidenav-show bg-gray-100 g-sidenav-pinned">
  <div class="min-height-300 bg-dark position-absolute w-100"></div>
  <aside class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 fixed-start" @click="toggleSidenav" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fa fa-bars fa-lg p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html " target="_blank">
        <img src="https://app.amar-manager.com/asset/logo-75.png" class="img-fluid" alt="main_logo">
      </a>
    </div>
    <div class="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active collapsed" aria-controls="dashboardsExamples" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-shop text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-controls="dashboardsExamples" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-cart text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Sales</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-controls="dashboardsExamples" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-basket text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Purchases</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-controls="dashboardsExamples" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-curved-next text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Return</span>
          </a>
        </li>
        <li class="nav-item">
          <a data-bs-toggle="collapse" href="#productMenu" class="nav-link " aria-controls="accountExamples" role="button" aria-expanded="false">
            <div class="icon icon-bag-17 icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-bag-17 text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Products</span>
          </a>
          <div class="collapse" id="productMenu">
            <ul class="nav ms-4">
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/settings.html">
                  <span class="sidenav-normal"> All Products </span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/billing.html">
                  <span class="sidenav-normal"> Add New Product </span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/invoice.html">
                  <span class="sidenav-normal"> Product Category </span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/security.html">
                  <span class="sidenav-normal"> Barcode </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a data-bs-toggle="collapse" href="#invoiceMenu" class="nav-link" aria-controls="accountExamples" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-single-copy-04 text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Invoice</span>
          </a>
          <div class="collapse" id="invoiceMenu">
            <ul class="nav ms-4">
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/settings.html">
                  <span class="sidenav-normal"> Sale Invoice </span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/billing.html">
                  <span class="sidenav-normal"> Purchase Invoice </span>
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li class="nav-item">
          <a data-bs-toggle="collapse" href="#contactMenu" class="nav-link " aria-controls="authExamples" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Contacts</span>
          </a>
          <div class="collapse " id="contactMenu">
            <ul class="nav ms-4">
              <li class="nav-item ">
                <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#supplierMenu">
                  <span class="sidenav-normal">Supplier<b class="caret"></b></span>
                </a>
                <div class="collapse " id="supplierMenu">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/basic.html">
                        <span class="sidenav-normal"> Supplier List </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/cover.html">
                        <span class="sidenav-normal"> Add New Supplier </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item ">
                <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#customerMenu">
                  <span class="sidenav-normal">Customer<b class="caret"></b></span>
                </a>
                <div class="collapse " id="customerMenu">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/basic.html">
                        <span class="sidenav-normal"> Customer List </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/cover.html">
                        <span class="sidenav-normal"> Add New Customer </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item ">
                <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#staffMenu">
                  <span class="sidenav-normal">Staff<b class="caret"></b></span>
                </a>
                <div class="collapse " id="staffMenu">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/basic.html">
                        <span class="sidenav-normal"> Staff List </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/cover.html">
                        <span class="sidenav-normal"> Add New Staff </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a data-bs-toggle="collapse" href="#accountMenu" class="nav-link " aria-controls="authExamples" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-money-coins text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Accounts</span>
          </a>
          <div class="collapse " id="accountMenu">
            <ul class="nav ms-4">
              <li class="nav-item ">
                <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#cashAccountMenu">
                  <span class="sidenav-normal">Cash Accounts<b class="caret"></b></span>
                </a>
                <div class="collapse " id="cashAccountMenu">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/basic.html">
                        <span class="sidenav-normal"> Cash Account List </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/cover.html">
                        <span class="sidenav-normal"> Add New Cash Account </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item ">
                <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#expenseMenu">
                  <span class="sidenav-normal">Expenses<b class="caret"></b></span>
                </a>
                <div class="collapse" id="expenseMenu">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/basic.html">
                        <span class="sidenav-normal"> Expense List </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/cover.html">
                        <span class="sidenav-normal"> Add New Expense </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item ">
                <a class="nav-link " data-bs-toggle="collapse" aria-expanded="false" href="#drawingMenu">
                  <span class="sidenav-normal">Drawings<b class="caret"></b></span>
                </a>
                <div class="collapse" id="drawingMenu">
                  <ul class="nav nav-sm flex-column">
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/basic.html">
                        <span class="sidenav-normal"> Drawing List </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link ms-5" href="../../pages/authentication/signin/cover.html">
                        <span class="sidenav-normal"> Add New Drawing </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a data-bs-toggle="collapse" href="#offerMenu" class="nav-link " aria-controls="accountExamples" role="button" aria-expanded="false">
            <div class="icon icon-bag-17 icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-spaceship text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Offer</span>
          </a>
          <div class="collapse" id="offerMenu">
            <ul class="nav ms-4">
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/settings.html">
                  <span class="sidenav-normal"> All Offers </span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/billing.html">
                  <span class="sidenav-normal"> Add New Offer </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a data-bs-toggle="collapse" href="#reportMenu" class="nav-link " aria-controls="accountExamples" role="button" aria-expanded="false">
            <div class="icon icon-bag-17 icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-collection text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Reports</span>
          </a>
          <div class="collapse" id="reportMenu">
            <ul class="nav ms-4">
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/settings.html">
                  <span class="sidenav-normal">Daily Profit Report</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/billing.html">
                  <span class="sidenav-normal">Income Statement</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/settings.html">
                  <span class="sidenav-normal">Ledger Statement</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/billing.html">
                  <span class="sidenav-normal">Collection Report</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/settings.html">
                  <span class="sidenav-normal">Product Report</span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/billing.html">
                  <span class="sidenav-normal">Staff Report</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a data-bs-toggle="collapse" href="#smsMenu" class="nav-link " aria-controls="accountExamples" role="button" aria-expanded="false">
            <div class="icon icon-email-83 icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-email-83 text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">SMS</span>
          </a>
          <div class="collapse" id="smsMenu">
            <ul class="nav ms-4">
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/settings.html">
                  <span class="sidenav-normal"> SMS Information </span>
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link " href="../../pages/account/billing.html">
                  <span class="sidenav-normal"> SMS Log </span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" role="button" aria-expanded="false">
            <div class="icon icon-shape icon-sm text-center d-flex align-items-center justify-content-center">
              <i class="ni ni-settings text-dark text-sm opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1">Settings</span>
          </a>
        </li>
      </ul>

    </div>
    <div class="sidenav-footer mx-3 ">
      <!--<div class="card card-plain shadow-none" id="sidenavCard">
        <img class="w-50 mx-auto" src="../assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration">
        <div class="card-body text-center p-3 w-100 pt-0">
          <div class="docs-info">
            <h6 class="mb-0">Need help?</h6>
            <p class="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div>
      </div>-->
      <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard" target="_blank" class="btn btn-dark btn-sm w-100 mb-3"><i class="fas fa-question-circle"></i> Help & Support</a>
      <a class="btn btn-danger btn-sm mb-0 w-100" href="/pages/sign-in.html" type="button"><i class="fas fa-sign-out-alt"></i> Logout</a>
    </div>
  </aside>
  <main class="main-content position-relative border-radius-lg fix-margin" id="main-content">
    <!-- Navbar -->
    <nav class="navbar navbar-main navbar-expand-lg bg-gradient-light text-dark sticky-top" id="navbarBlur" data-scroll="false">
      <div class="container-fluid d-flex justify-content-between">
        <div class="d-flex" aria-label="breadcrumb">
          <ul class="navbar-nav d-flex  justify-content-end">
          <li class="nav-item pe-3 d-flex d-xl-flex align-items-center">
            <a href="javascript:;" class="nav-link  p-0" id="mainIconNavbarSidenav"  @click="toggleSidenav">
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line bg-dark"></i>
                <i class="sidenav-toggler-line bg-dark"></i>
                <i class="sidenav-toggler-line bg-dark"></i>
              </div>
            </a>
          </li>
        </ul>
        <div>
          <h6 class="font-weight-bolder  mb-0">Dashboard</h6>
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-0 px-0 me-sm-6 me-0">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 " href="javascript:;">Pages</a></li>
            <li class="breadcrumb-item text-sm  active" aria-current="page">Dashboard</li>
          </ol>
        </div>
        </div>
        <div>
        <div class="collapse navbar-collapse ms-auto" id="navbar">
          <div class="dropdown">
            <a href="#" class="btn btn-sm px-3 bg-light text-dark mb-0 dropdown-toggle " data-bs-toggle="dropdown" id="navbarDropdownMenuLink2">
                <img src="https://demos.creative-tim.com/argon-dashboard-pro-bs4/assets/img/icons/flags/US.png" /> English
            </a>
            <ul class="dropdown-menu mt-0" aria-labelledby="navbarDropdownMenuLink2">
                <li>
                    <a class="dropdown-item" href="#">
                      <img src="https://flagsapi.com/BD/flat/24.png" /> বাংলা
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#">
                      <img src="https://flagsapi.com/JP/flat/24.png" /> 日本語
                    </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </nav>

    <!-- End Navbar -->
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p>
                    <h5 class="font-weight-bolder">
                      $53,000
                    </h5>
                    <p class="mb-0">
                      <span class="text-success text-sm font-weight-bolder">+55%</span>
                      since yesterday
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                    <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Today's Users</p>
                    <h5 class="font-weight-bolder">
                      2,300
                    </h5>
                    <p class="mb-0">
                      <span class="text-success text-sm font-weight-bolder">+3%</span>
                      since last week
                    </p>
                  </div>
                </div>
                <div class="progress-wrapper">
                  <div class="progress-info">
                    <div class="progress-percentage">
                      <span class="text-sm font-weight-bold">60%</span>
                    </div>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                    <i class="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">New Clients</p>
                    <h5 class="font-weight-bolder">
                      +3,462
                    </h5>
                    <p class="mb-0">
                      <span class="text-danger text-sm font-weight-bolder">-2%</span>
                      since last quarter
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i class="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-8">
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Sales</p>
                    <h5 class="font-weight-bolder">
                      $103,430
                    </h5>
                    <p class="mb-0">
                      <span class="text-success text-sm font-weight-bolder">+5%</span> than last month
                    </p>
                  </div>
                </div>
                <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                    <i class="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div class="card">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-12">
                  <span  class="badge bg-gradient-success">OFFER</span>
                  <div class="numbers">
                    <p class="text-sm mb-0 text-uppercase font-weight-bold">Jira Offer 500KG</p>
                    <p class="font-weight-bolder">
                      300 KG / 2,300 KG
                    </p>
                    <p class="mb-0">
                      <span class="text-success text-sm font-weight-bolder">+3%</span>
                      since last week
                    </p>
                  </div>
                </div>
                <div class="progress-wrapper">
                  <div class="progress-info">
                    <div class="progress-percentage">
                      <span class="text-sm font-weight-bold">60%</span>
                    </div>
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <div class="card border shadow bg-gradient-primary text-white">
            <div class="card-body">
              <p class="font-weight-bold">Stock Warning 1</p>
              <h3 class="font-weight-bolder text-white">
                ৳ 1,25,53,000.00
              </h3>
            </div>
            <div class="card-footer pt-0"><a class="btn btn-light mb-0" href="#">See more...</a></div>

          </div>
        </div>
        <div class="col-4">
          <div class="card border shadow bg-gradient-danger text-white">
            <div class="card-body">
              <p class="font-weight-bold">Stock Warning 2</p>
              <h3 class="font-weight-bolder">
                ৳ 1,25,53,000.00
              </h3>
            </div>
            <div class="card-footer pt-0"><a class="btn btn-outline-light mb-0">See more...</a></div>
            </div>
        </div>
        <div class="col-4">
          <div class="card border shadow">
            <div class="card-body">
              <p class="font-weight-bold">Stock Warning</p>
              <h3 class="font-weight-bolder text-end">
                ৳ 1,25,53,000.00
              </h3>
            </div>
            <div class="card-footer pt-0"><a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#">See more...</a></div>
          </div>
        </div>
      </div>

      <div class="row py-3">
        <div class="col">
          <div class="card shadow">
            <p class="mb-0 text-uppercase font-weight-bold bg-gradient-primary text-white ps-3 py-2">Sales Information</p>

            <div class="card-body p-3">
              <div class="row">
                <div class="col-xs-12 col-md-4">
                  <div class="numbers">
                    <p class="mb-0">Today</p>
                    <h3 class="font-weight-bolder h3">
                      ৳ 1,25,53,000.00
                    </h3>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="numbers">
                    <p class="mb-0">Yesterday</p>
                    <h3 class="font-weight-bolder h3">
                      ৳ 1,25,53,000.00
                    </h3>
                  </div>
                </div>
                <div class="col-xs-12 col-md-4">
                  <div class="numbers">
                    <p class="mb-0">This Month</p>
                    <h3 class="font-weight-bolder h3">
                      ৳ 1,25,53,000.00
                    </h3>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
          <div class="card z-index-2 h-100">
            <div class="card-header pb-0 pt-3 bg-transparent">
              <h6 class="text-capitalize">Sales overview</h6>
              <p class="text-sm mb-0">
                <i class="fa fa-arrow-up text-success"></i>
                <span class="font-weight-bold">4% more</span> in 2021
              </p>
            </div>
            <div class="card-body p-3">
              <div class="chart">
                <canvas id="chart-line" class="chart-canvas" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card card-carousel overflow-hidden h-100 p-0">
            <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel">
              <div class="carousel-inner border-radius-lg h-100">
                <div class="carousel-item h-100 active" style="background-image: url('../assets/img/carousel-1.jpg');
      background-size: cover;">
                  <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i class="ni ni-camera-compact text-dark opacity-10"></i>
                    </div>
                    <h5 class="text-white mb-1">Get started with Argon</h5>
                    <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
                  </div>
                </div>
                <div class="carousel-item h-100" style="background-image: url('../assets/img/carousel-2.jpg');
      background-size: cover;">
                  <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i class="ni ni-bulb-61 text-dark opacity-10"></i>
                    </div>
                    <h5 class="text-white mb-1">Faster way to create web pages</h5>
                    <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                  </div>
                </div>
                <div class="carousel-item h-100" style="background-image: url('../assets/img/carousel-3.jpg');
      background-size: cover;">
                  <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i class="ni ni-trophy text-dark opacity-10"></i>
                    </div>
                    <h5 class="text-white mb-1">Share with us your design tips!</h5>
                    <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
          <div class="card ">
            <div class="card-header pb-0 p-3">
              <div class="d-flex justify-content-between">
                <h6 class="mb-2">Sales by Country</h6>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table align-items-center ">
                <tbody>
                  <tr>
                    <td class="w-30">
                      <div class="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../assets/img/icons/flags/US.png" alt="Country flag">
                        </div>
                        <div class="ms-4">
                          <p class="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 class="text-sm mb-0">United States</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 class="text-sm mb-0">2500</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 class="text-sm mb-0">$230,900</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 class="text-sm mb-0">29.9%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-30">
                      <div class="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../assets/img/icons/flags/DE.png" alt="Country flag">
                        </div>
                        <div class="ms-4">
                          <p class="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 class="text-sm mb-0">Germany</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 class="text-sm mb-0">3.900</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 class="text-sm mb-0">$440,000</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 class="text-sm mb-0">40.22%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-30">
                      <div class="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../assets/img/icons/flags/GB.png" alt="Country flag">
                        </div>
                        <div class="ms-4">
                          <p class="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 class="text-sm mb-0">Great Britain</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 class="text-sm mb-0">1.400</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 class="text-sm mb-0">$190,700</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 class="text-sm mb-0">23.44%</h6>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="w-30">
                      <div class="d-flex px-2 py-1 align-items-center">
                        <div>
                          <img src="../assets/img/icons/flags/BR.png" alt="Country flag">
                        </div>
                        <div class="ms-4">
                          <p class="text-xs font-weight-bold mb-0">Country:</p>
                          <h6 class="text-sm mb-0">Brasil</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Sales:</p>
                        <h6 class="text-sm mb-0">562</h6>
                      </div>
                    </td>
                    <td>
                      <div class="text-center">
                        <p class="text-xs font-weight-bold mb-0">Value:</p>
                        <h6 class="text-sm mb-0">$143,960</h6>
                      </div>
                    </td>
                    <td class="align-middle text-sm">
                      <div class="col text-center">
                        <p class="text-xs font-weight-bold mb-0">Bounce:</p>
                        <h6 class="text-sm mb-0">32.14%</h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="card">
            <div class="card-header pb-0 p-3">
              <h6 class="mb-0">Categories</h6>
            </div>
            <div class="card-body p-3">
              <ul class="list-group">
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-mobile-button text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Devices</h6>
                      <span class="text-xs">250 in stock, <span class="font-weight-bold">346+ sold</span></span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                  </div>
                </li>
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-tag text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Tickets</h6>
                      <span class="text-xs">123 closed, <span class="font-weight-bold">15 open</span></span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                  </div>
                </li>
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-box-2 text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Error logs</h6>
                      <span class="text-xs">1 is active, <span class="font-weight-bold">40 closed</span></span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                  </div>
                </li>
                <li class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                      <i class="ni ni-satisfied text-white opacity-10"></i>
                    </div>
                    <div class="d-flex flex-column">
                      <h6 class="mb-1 text-dark text-sm">Happy users</h6>
                      <span class="text-xs font-weight-bold">+ 430</span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <button class="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto"><i class="ni ni-bold-right" aria-hidden="true"></i></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer pt-3  ">
        <div class="container-fluid">
          <div class="row align-items-center justify-content-lg-between">
            <div class="col-lg-6 mb-lg-0 mb-4">
              <div class="copyright text-center text-sm text-muted text-lg-start">
                © {{ new Date().getFullYear()}},
                made with <i class="fa fa-heart"></i> by
                <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative Tim</a>
                for a better web.
              </div>
            </div>
            <div class="col-lg-6">
              <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                <li class="nav-item">
                  <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
  <div class="fixed-plugin">
    <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i class="fa fa-cog py-2"> </i>
    </a>
    <div class="card shadow-lg">
      <div class="card-header pb-0 pt-3 ">
        <div class="float-start">
          <h5 class="mt-3 mb-0">Argon Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div class="float-end mt-4">
          <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i class="fa fa-close"></i>
          </button>
        </div>
        <!-- End Toggle Button -->
      </div>
      <hr class="horizontal dark my-1">
      <div class="card-body pt-sm-3 pt-0 overflow-auto">
        <!-- Sidebar Backgrounds -->
        <div>
          <h6 class="mb-0">Sidebar Colors</h6>
        </div>
        <a href="javascript:void(0)" class="switch-trigger background-color">
          <div class="badge-colors my-2 text-start">
            <span class="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
            <span class="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
          </div>
        </a>
        <!-- Sidenav Type -->
        <div class="mt-3">
          <h6 class="mb-0">Sidenav Type</h6>
          <p class="text-sm">Choose between 2 different sidenav types.</p>
        </div>
        <div class="d-flex">
          <button class="btn bg-gradient-primary w-100 px-3 mb-2 active me-2" data-class="bg-white" onclick="sidebarType(this)">White</button>
          <button class="btn bg-gradient-primary w-100 px-3 mb-2" data-class="bg-default" onclick="sidebarType(this)">Dark</button>
        </div>
        <p class="text-sm d-block mt-2">You can change the sidenav type just on desktop view.</p>
        <!-- Navbar Fixed -->
        <div class="d-flex my-3">
          <h6 class="mb-0">Navbar Fixed</h6>
          <div class="form-check form-switch ps-0 ms-auto my-auto">
            <input class="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)">
          </div>
        </div>
        <hr class="horizontal dark my-sm-4">
        <div class="mt-2 mb-5 d-flex">
          <h6 class="mb-0">Light / Dark</h6>
          <div class="form-check form-switch ps-0 ms-auto my-auto">
            <input class="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)">
          </div>
        </div>
        <a class="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/argon-dashboard">Free Download</a>
        <a class="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/license/argon-dashboard">View documentation</a>
        <div class="w-100 text-center">
          <a class="github-button" href="https://github.com/creativetimofficial/argon-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/argon-dashboard on GitHub">Star</a>
          <h6 class="mt-3">Thank you for sharing!</h6>
          <a href="https://twitter.com/intent/tweet?text=Check%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fargon-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
            <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
            <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
          </a>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>
