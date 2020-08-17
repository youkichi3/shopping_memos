<?php

namespace App\Http\Controllers;

use App\VegetableList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class VegetableListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vegetableLists = VegetableList::all();

        return ['vegetableLists' => $vegetableLists];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\VegetableList  $vegetableList
     * @return \Illuminate\Http\Response
     */
    public function show(VegetableList $vegetableList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\VegetableList  $vegetableList
     * @return \Illuminate\Http\Response
     */
    public function edit(VegetableList $vegetableList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\VegetableList  $vegetableList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, VegetableList $vegetableList)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\VegetableList  $vegetableList
     * @return \Illuminate\Http\Response
     */
    public function destroy(VegetableList $vegetableList)
    {
        //
    }
}
