<?php

namespace App\Http\Controllers;

use App\OtherList;
use Illuminate\Http\Request;

class OtherListController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $otherLists = OtherList::all();

        return ['otherLists' => $otherLists];
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
     * @param  \App\OtherList  $otherList
     * @return \Illuminate\Http\Response
     */
    public function show(OtherList $otherList)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\OtherList  $otherList
     * @return \Illuminate\Http\Response
     */
    public function edit(OtherList $otherList)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\OtherList  $otherList
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OtherList $otherList)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\OtherList  $otherList
     * @return \Illuminate\Http\Response
     */
    public function destroy(OtherList $otherList)
    {
        //
    }
}
